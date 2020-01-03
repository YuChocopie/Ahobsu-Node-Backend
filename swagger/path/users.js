module.exports = {
  '/users': {
    get: {
      tags: ['users'],
      summary: '유저 조회',
      produces: ['application/json'],
      parameters: [
        {
          name: 'Authorization',
          in: 'header',
          type: 'string',
          description: 'API 인증 키',
          default:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJiaXJ0aGRheSI6IjE5OTctMDEtMTYiLCJlbWFpbCI6Inl1Y2hvY29waWVAZ21haWwuY29tIiwibmFtZSI6IuycoOyglSIsImdlbmRlciI6IuyXrCIsInJlZnJlc2hEYXRlIjpudWxsLCJyZWZyZXNoVG9rZW4iOm51bGwsIm1pc3Npb24iOm51bGwsInNuc0lkIjoiMSIsInNuc1R5cGUiOiJnb29nbGUiLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAzVDE2OjU5OjE5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAzVDE2OjU5OjE5LjAwMFoifSwiaWF0IjoxNTc4MDcwNzYxLCJleHAiOjE1Nzg2NzU1NjF9.FPpD0dXndHU3e5e9XA1PDOwiPXWwuzEvQ5CazSDm2gI',
          required: true,
        },
      ],
      responses: {
        '200': {
          schema: {
            type: 'object',
            example: {
              status: 200,
              message: '',
              data: [
                {
                  id: 1,
                  birthday: '1997-01-16',
                  email: 'yuchocopie@gmail.com',
                  name: '유정',
                  gender: '여',
                  refreshDate: null,
                  refreshToken: null,
                  mission: null,
                  snsId: '1',
                  snsType: 'google',
                  createdAt: '2020-01-03T15:27:18.000Z',
                  updatedAt: '2020-01-03T15:27:18.000Z',
                },
              ],
            },
          },
        },
      },
    },
    post: {
      tags: ['users'],
      summary: '회원 가입',
      produces: ['application/json'],
      parameters: [
        {
          name: 'body',
          in: 'body',
          required: true,
          schema: {
            type: 'object',
            example: {
              name: '김유정',
              birthday: '1997-01-16',
              email: 'yuchochpie@gmail.com',
              gender: '여',
              snsId: 1,
              snsType: 'google',
            },
          },
        },
      ],
      responses: {
        '200': {
          schema: {
            type: 'object',
            example: {
              status: 200,
              message: '',
              data: {
                id: 2,
                name: '김유정',
                birthday: '1997-01-16',
                email: 'yuchochpie@gmail.com',
                gender: '여',
                snsId: 1,
                snsType: 'google',
                updatedAt: '2020-01-03T16:46:07.880Z',
                createdAt: '2020-01-03T16:46:07.880Z',
              },
            },
          },
        },
      },
    },

    put: {
      tags: ['users'],
      summary: '회원 정보 수정',
      produces: ['application/json'],
      parameters: [
        {
          name: 'Authorization',
          in: 'header',
          type: 'string',
          description: 'API 인증 키',
          default:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJiaXJ0aGRheSI6IjE5OTctMDEtMTYiLCJlbWFpbCI6Inl1Y2hvY29waWVAZ21haWwuY29tIiwibmFtZSI6IuycoOyglSIsImdlbmRlciI6IuyXrCIsInJlZnJlc2hEYXRlIjpudWxsLCJyZWZyZXNoVG9rZW4iOm51bGwsIm1pc3Npb24iOm51bGwsInNuc0lkIjoiMSIsInNuc1R5cGUiOiJnb29nbGUiLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAzVDE2OjU5OjE5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAzVDE2OjU5OjE5LjAwMFoifSwiaWF0IjoxNTc4MDcwNzYxLCJleHAiOjE1Nzg2NzU1NjF9.FPpD0dXndHU3e5e9XA1PDOwiPXWwuzEvQ5CazSDm2gI',
          required: true,
        },
        {
          name: 'body',
          in: 'body',
          required: true,
          schema: {
            type: 'object',
            example: {
              name: '김유정',
              birthday: '1997-01-16',
              email: 'yuchochpie@gmail.com',
              gender: '여',
              snsId: 1,
              snsType: 'google',
            },
          },
        },
      ],
      responses: {
        '200': {
          schema: {
            type: 'object',
            example: {
              status: 200,
              message: '',
              data: {
                user: {
                  id: 1,
                  birthday: '1997-01-16',
                  email: 'yuchochpie@gmail.com',
                  name: '유정',
                  gender: '여',
                  refreshDate: null,
                  refreshToken: null,
                  mission: null,
                  snsId: '1',
                  snsType: 'google',
                  createdAt: '2020-01-03T15:27:18.000Z',
                  updatedAt: '2020-01-03T16:52:18.000Z',
                },
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ['users'],
      parameters: [
        {
          name: 'Authorization',
          in: 'header',
          type: 'string',
          description: 'API 인증 키',
          default:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJiaXJ0aGRheSI6IjE5OTctMDEtMTYiLCJlbWFpbCI6Inl1Y2hvY29waWVAZ21haWwuY29tIiwibmFtZSI6IuycoOyglSIsImdlbmRlciI6IuyXrCIsInJlZnJlc2hEYXRlIjpudWxsLCJyZWZyZXNoVG9rZW4iOm51bGwsIm1pc3Npb24iOm51bGwsInNuc0lkIjoiMSIsInNuc1R5cGUiOiJnb29nbGUiLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAzVDE2OjU5OjE5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAzVDE2OjU5OjE5LjAwMFoifSwiaWF0IjoxNTc4MDcwNzYxLCJleHAiOjE1Nzg2NzU1NjF9.FPpD0dXndHU3e5e9XA1PDOwiPXWwuzEvQ5CazSDm2gI',
          required: true,
        },
      ],
      summary: '회원 탈퇴',
      responses: {
        '200': {
          schema: {
            type: 'object',
            properties: {
              ok: {
                type: 'boolean',
                example: true,
              },
              error: {
                type: 'string',
                example: null,
              },
            },
          },
        },
      },
    },
  },
};
