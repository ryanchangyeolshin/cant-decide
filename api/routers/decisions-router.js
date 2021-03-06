const { Router } = require('express');
const decisionsGateway = require('../gateways/decisions-gateway');

const decisionsRouter = decisions => {
  const { createDecision, findDecisionsByEmail, findDecisionById } = decisionsGateway(decisions)
  const router = new Router();

  router
    .post('/', async ({ body: { decision } }, res) => {
      const decisionData = await createDecision(decision)
      return res.status(201).json(decisionData);
    })

  return router;
}

module.exports = decisionsRouter;