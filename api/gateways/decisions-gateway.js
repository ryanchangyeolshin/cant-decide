module.exports = decisions => {
    return {
      async createDecision(data) {
        const decisionData = await decisions.insertOne(data);
        return decisionData.ops[0];
      },
      async findDecisionsByEmail(email) {
        const decisionsData = await decisions.find({ email });
        return decisionsData;
      },
      async findDecisionById(id) {
        const decisionsData = await decisions.findOne({ id });
        return decisionsData;
      },
    }
  }