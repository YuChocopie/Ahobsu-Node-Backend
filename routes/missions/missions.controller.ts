import moment from 'moment';
import { RequestResponseNext } from '..';
import response from '../../lib/response';
import { getUserById } from '../users/users.repository';
import {
  createMission,
  deleteMission,
  getMissionById,
  setMissionsAndRefeshDateInUser,
  setMissionsInUser,
  updateMission,
} from './missions.repository';
import { getNewMission, getOldMission, hasOldMissions, isRefresh, hasRefresh } from './missions.service';
import { getDateString } from '../../lib/date';

const missoins: RequestResponseNext = async (req, res) => {
  try {
    const userId = req.user!.id;
    const user = await getUserById(userId);
    const oldMission = getOldMission(user);
    const refresh = isRefresh(user);
    if (hasOldMissions(oldMission)) {
      return res.json(response({ data: { refresh, missions: oldMission.missions } }));
    }
    const missions = await getNewMission(userId);
    await setMissionsInUser({ missions, id: userId });
    res.json(response({ data: { refresh, missions } }));
  } catch (e) {
    console.log(e);
    res.json(response({ status: 500, message: e.message }));
  }
};

const refresh: RequestResponseNext = async (req, res) => {
  try {
    const userId = req.user!.id;
    const user = await getUserById(userId);
    const date = getDateString({});
    if (hasRefresh(user)) {
      return res.json(response({ status: 400, message: '갱신 횟수가 모자랍니다.' }));
    }
    const missions = await getNewMission(userId);
    await setMissionsAndRefeshDateInUser({ missions, id: userId });
    res.json(response({ data: { refresh: false, missions } }));
  } catch (e) {
    console.log(e);
    res.json(response({ status: 500, message: e.message }));
  }
};

const mission: RequestResponseNext = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const mission = await getMissionById(id);
    res.json(response({ data: mission }));
  } catch (e) {
    console.log(e);
    res.json(response({ status: 500, message: e.message }));
  }
};

const create: RequestResponseNext = async (req, res) => {
  try {
    const missions = await createMission(req.body);
    res.json(response({ status: 201, data: missions }));
  } catch (e) {
    console.log(e);
    res.json(response({ status: 500, message: e.message }));
  }
};

const update: RequestResponseNext = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await updateMission(id, req.body);
    const mission = await getMissionById(id);
    res.json(response({ data: mission }));
  } catch (e) {
    console.log(e);
    res.json(response({ status: 500, message: e.message }));
  }
};

const destroy: RequestResponseNext = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteMission(id);
    res.json(response({ status: 204, message: '문제를 삭제 했습니다.' }));
  } catch (e) {
    console.log(e);
    res.json(response({ status: 500, message: e.message }));
  }
};

export default { missoins, refresh, mission, create, update, destroy };
