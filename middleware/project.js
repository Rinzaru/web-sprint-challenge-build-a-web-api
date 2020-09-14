const projects = require("../data/helpers/projectModel");

const validateProjectId = () => {
  return (req, res, next) => {
    projects
      .get(req.params.id)
      .then((project) => {
        if (project) {
          req.project = project;
          next();
        } else {
          res.status(404).json({ message: "User Not Found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "Could Not Obtain project" });
      });
  };
};

module.exports = {
  validateProjectId,
};
