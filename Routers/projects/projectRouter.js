const express = require("express");
const router = express.Router();

const projects = require("../../data/helpers/projectModel");

router.get("/:id", (req, res) => {
  projects
    .get(req.params.id)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: "Project Not Found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Retrieving Projects" });
    });
});

router.post("/", (req, res) => {
  projects
    .insert(req.body)
    .then((project) => {
      if (!req.body.name || !req.body.description) {
        res.status(400).json({
          message: "Please add a name and description for your project",
        });
      } else {
        res.status(200).json(project);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Adding Project" });
    });
});

router.put("/:id", (req, res) => {
  projects
    .update(req.params.id, req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error Updating Project" });
    });
});

router.delete("/:id", (req, res) => {
  projects
    .remove(req.params.id)
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else res.status(404).json({ message: "Project Not Found" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error Deleting Project" });
    });
});

module.exports = router;
