const express = require("express");
const router = express.Router();

const actions = require("../../data/helpers/actionModel");

router.get("/", (req, res) => {
  actions
    .get(req.params.id)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "Action Not Found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Finding Action" });
    });
});

router.get("/:id", (req, res) => {
  actions
    .get(req.params.id)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "Action Not Found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Finding Action" });
    });
});

router.post("/", (req, res) => {
  actions
    .insert(req.body)
    .then((action) => {
      if (!req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(400).json({
          message:
            "Please add a Project Id, Notes and Description for your action",
        });
      } else {
        res.status(200).json(action);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Error Adding action" });
    });
});

router.put("/:id", (req, res) => {
  actions
    .update(req.params.id, req.body)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "Action Not Found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error Updating Action" });
    });
});

router.delete("/:id", (req, res) => {
  actions
    .remove(req.params.id)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "Action Not Found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error Deleting Action" });
    });
});

module.exports = router;
