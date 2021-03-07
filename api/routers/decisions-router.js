const { Router } = require('express');
const decisionsGateway = require('../gateways/decisions-gateway');

const decisionsRouter = decisions => {
  const { createDecision, findDecisionsByAttribute } = decisionsGateway(decisions)
  const router = new Router();

  router
    .get('/:user', async({ params: { user } }, res) => {
      try {
        const decisionsData = await findDecisionsByAttribute('user', user);
        return res.status(201).json(decisionsData);
      } catch(e) {
        return res.status(400).json(e);
      }
    })
    .post('/', async ({ body: { user, name, choices } }, res) => {
      try {
        const data = {
          user: user,
          name: name,
          choices: choices,
        };
        console.log(data);
        const decisionData = await createDecision(data);
        return res.status(201).json(decisionData);
      } catch(e) {
        return res.status(400).json(e);
      }
    })

  return router;
}

module.exports = decisionsRouter;