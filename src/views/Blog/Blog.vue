<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';
import { GET_ARTICLE } from '@/graphql/blog.ts';

const route = useRoute();
const slug = route.params.slug as string;

const { result, loading, error } = useQuery(GET_ARTICLE, { slug });
</script>

<template>
  <div class="blog-page container">
    <div v-if="loading" class="loading">Завантаження...</div>
    <div v-else-if="error" class="error">Помилка: {{ error.message }}</div>

    <div v-else-if="result && result.blog" class="blog-content">
      <div class="blog-wrapper">
        <div class="blog-image-wrapper">
          <img
            v-if="result.blog.image"
            :src="result.blog.image"
            :alt="result.blog.image_alt"
            :title="result.blog.image_title"
          />
        </div>

        <div class="blog-text">
          <h1 class="blog-title">{{ result.blog.title }}</h1>
          <div class="blog-meta">
            <span>Опубліковано: {{ new Date(result.blog.published_at).toLocaleDateString() }}</span>
            <span>Переглядів: {{ result.blog.views_count }}</span>
          </div>

          <div class="blog-description" v-html="result.blog.description"></div>

          <div v-if="result.blog.categories.length" class="blog-categories">
            <h3>Категорії:</h3>
            <ul>
              <li v-for="category in result.blog.categories" :key="category.id">{{ category.name }}</li>
            </ul>
          </div>

          <div class="blog-share">
            <span>Поділитись:</span>
            <button class="share-btn">Facebook</button>
            <button class="share-btn">Twitter</button>
            <button class="share-btn">LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #333;
}

.loading, .error {
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
  color: #555;
}

.blog-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.blog-image-wrapper {
  flex: 1;
  min-width: 300px;
}

.blog-image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.blog-text {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
}

.blog-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #111;
}

.blog-meta {
  font-size: 0.95rem;
  color: #666;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.blog-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.blog-categories h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.blog-categories ul {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0;
}

.blog-categories li {
  background: #eef2f7;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.blog-share {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.share-btn {
  background: #f3f4f6;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
}

.share-btn:hover {
  background: #e2e6ef;
}

@media (max-width: 768px) {
  .blog-wrapper {
    flex-direction: column;
  }
  .blog-image-wrapper, .blog-text {
    min-width: 100%;
  }
}
</style>
