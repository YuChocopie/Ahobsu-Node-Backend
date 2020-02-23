import db from '../../models';
import response from '../../lib/response';

export default {
  post: async (req, res) => {
    try {
      if (isRequired(req.body)) {
        return res.json(response({ status: 412, message: '필수 파라이터가 없습니다.' }));
      }
      const question = await createQuestion(req.body);
      res.json(response({ status: 201, data: question }));
    } catch (e) {
      console.log(e);
      res.json(response({ status: 500, message: e.message }));
    }
  },
};

const isRequired = ({ content }) => {
  return !content;
};

const createQuestion = async ({ content }) => {
  return db.questions.create({
    content,
  });
};
