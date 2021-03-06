module.exports = decisions => {
    return {
      async createDecision(data) {
        const decisionData = await decisions.insertOne(data);
        return decisionData.ops[0];
      },
      async findDecisionsByAttribute(attribute, value) {
        const decisionsData = await decisions.find({ [attribute]: value }).toArray();
        return decisionsData;
      },
    }
  }