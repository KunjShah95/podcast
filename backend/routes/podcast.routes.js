import { Router } from "express";
import {
  categories,
  getPodcastById,
  getPodcasts,
  getPodcastsByCategory,
  searchPodcasts,
} from "../api/podcast-store.js";

const router = Router();

router.get("/podcasts", (req, res) => {
  const searchQuery = typeof req.query.q === "string" ? req.query.q : "";
  const category = typeof req.query.category === "string" ? req.query.category : "";

  let results = getPodcasts();

  if (searchQuery) {
    results = searchPodcasts(searchQuery);
  }

  if (category) {
    results = getPodcastsByCategory(category);
  }

  res.json({
    success: true,
    data: results,
    meta: {
      count: results.length,
      query: searchQuery || null,
      category: category || null,
    },
  });
});

router.get("/podcasts/:id", (req, res) => {
  const podcast = getPodcastById(req.params.id);

  if (!podcast) {
    res.status(404).json({
      success: false,
      message: "Podcast not found",
    });
    return;
  }

  res.json({
    success: true,
    data: podcast,
  });
});

router.get("/categories", (_req, res) => {
  res.json({
    success: true,
    data: categories,
  });
});

router.get("/categories/:category/podcasts", (req, res) => {
  const results = getPodcastsByCategory(req.params.category);

  res.json({
    success: true,
    data: results,
    meta: {
      count: results.length,
      category: req.params.category,
    },
  });
});

export default router;