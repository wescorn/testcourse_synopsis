const request = require('supertest');

const conn = require('../../config/sequelize-connect');
const app = require('../../../app');

let authorizationToken;

describe('APIs Testing...', () => {
  test('Create Quiz', async () => {
    const res = await request(app)
      .post('/api/quiz')
      .send({
        name: "This is my Awesome Quiz",
        description: "This is the awesome quiz I created",
        questions:[
            {
                text: "Which one is correct ?",
                answers:[
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Me",
                        isCorrect: true
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    }
                ] 
            },
            {
                text: "Which one is correct ?",
                answers:[
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Me",
                        isCorrect: true
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    }
                ] 
             },
             {
                text: "Which one is correct ?",
                answers:[
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Me",
                        isCorrect: true
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    }
                ] 
             },
             {
                text: "Which one is correct ?",
                answers:[
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Me",
                        isCorrect: true
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    }
                ] 
             },
             {
                text: "Which one is correct ?",
                answers:[
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    },
                    {
                        text: "Me",
                        isCorrect: true
                    },
                    {
                        text: "Not Me",
                        isCorrect: false
                    }
                ] 
             }
        ]
    })
    .set('x-token', authorizationToken);// Taking a Nap need to fix this so it has the token I assume
    UserData = res.body.data;
    expect(res.statusCode).toBe(200);
  });
});

afterAll(async () => {
  try {
    await conn.dbDisconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
