const actions = require("../data/helpers/actionModel");

const validateActionId = () => {
  return (req, res, next) => {
    actions
      .get(req.params.id)
      .then((action) => {
        if (action) {
          req.action = action;
          next();
        } else {
          res.status(404).json({ message: "User Not Found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Could Not Obtain Action" });
      });
  };
};

module.exports = {
  validateActionId,
};
