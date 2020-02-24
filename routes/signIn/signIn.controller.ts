import jwt from 'jsonwebtoken';
import { RequestResponseNext } from '..';
import response from '../../lib/response';
import { createUser, getUserBySnsIdAndSnsType } from '../users/users.controller';

const refresh: RequestResponseNext = async (req, res) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) {
      return res.json(response({ status: 400, message: '토큰이 필요합니다.' }));
    }
    const result = jwt.verify(token, process.env.privateKey as string) as { snsId: string; snsType: string };
    if (isRequired(result)) {
      return res.json(response({ status: 1100, message: '올바르지 못한 토큰 입니다.' }));
    }

    const user = await getUserBySnsIdAndSnsType(result);
    if (!user) {
      return res.json(response({ status: 404, message: '유저가 존재하지 없습니다.' }));
    }
    const { accessToken, refreshToken } = await createToken(user);
    const signUp = isSignUp(user);
    res.json(response({ status: 201, data: { accessToken, refreshToken, signUp } }));
  } catch (e) {
    console.log(e);
    return res.json(response({ status: 400, message: '올바르지 못한 토큰 입니다.' }));
  }
};
const create: RequestResponseNext = async (req, res) => {
  try {
    const { snsType } = req.body;
    const token = req.headers.authorization;
    if (isRequired(req.body) || !token) {
      return res.json(response({ status: 412, message: '필수 파라이터가 없습니다.' }));
    }
    const snsData =
      process.env.NODE_ENV === 'test'
        ? {
            iss: 'https://appleid.apple.com',
            aud: 'com.mashup.ahobsu.Ahobsu',
            exp: 1581254790,
            iat: 1581254190,
            sub: '001813.71f97bef48324fb29451a33e05d2cf5d.0908',
            c_hash: 'KB0W75zvIFEcY9zW-79uxQ',
            email: 'j5vvd9xtrb@privaterelay.appleid.com',
            email_verified: 'true',
            is_private_email: 'true',
            auth_time: 1581254190,
          }
        : await jwt.decode(token);
    const { sub: snsId, email } = snsData as { sub: string; email: string };
    const user = await getUserBySnsIdAndSnsType({ snsId, snsType });
    const newUser = user ? user : await createUser({ snsId, snsType, email });
    const { accessToken, refreshToken } = await createToken(newUser);
    const signUp = isSignUp(newUser);
    res.json(response({ status: 201, data: { accessToken, refreshToken, signUp } }));
  } catch (e) {
    return res.json(response({ status: 500, message: e.message }));
  }
};
export default {
  refresh,
  create,
};

const isRequired = ({ snsType }: { snsType: string }) => {
  return !snsType;
};

const createToken = async ({ id, snsId, snsType }: { id: number; snsId: string; snsType: string }) => {
  const accessToken = await jwt.sign(
    {
      user: {
        id,
      },
    },
    process.env.privateKey as string,
    { expiresIn: 7 * 24 * 60 * 60 },
  );
  const refreshToken = await jwt.sign(
    {
      snsId,
      snsType,
    },
    process.env.privateKey as string,
    { expiresIn: 30 * 24 * 60 * 60 },
  );
  return { accessToken, refreshToken };
};

const isSignUp = ({
  name,
  birthday,
  email,
  gender,
}: {
  name: string;
  birthday: string;
  email: string;
  gender: string;
}) => {
  return !!name && !!birthday && !!email && !!gender;
};