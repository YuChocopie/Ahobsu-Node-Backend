import request from 'supertest';
import app from '../app';
import connectDB from '../connectDB';
import { Questions } from '../models/question';
import { checkStatus, Request } from './util';

const req = request(app);

beforeAll(async () => {
  await connectDB();
});

describe('signin', () => {
  it('Post /api/v1/questions', async () => {
    const content = '나는 누구인가?';
    const response = await postQuestion({ req, content });
    checkStatus(response, 201);
    expect(hasPostApiV1Questions(response.body.data));
  });
});

const hasPostApiV1Questions = (data: Questions) => {
  if (!('id' in data)) throw new Error('missing id key');
  if (!('content' in data)) throw new Error('missing content key');
};

const postQuestion = async ({ req, content }: { req: Request; content: string }) => {
  return req.post('/api/v1/questions').send({ content });
};
