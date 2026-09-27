import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../../data/blog';
import { BlogPost } from '../../models/fitness.models';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="blog" class="blog-section section-padding">
      <div class="container-custom">
        <div class="section-header-flex">
          <div class="section-header">
            <span class="sub-title">// PERFORMANCE INSIGHTS</span>
            <h2 class="main-title">SCIENCE & RECOVERY.</h2>
          </div>
          <a routerLink="/blog" class="btn-outline">
            VIEW ALL ARTICLES →
          </a>
        </div>

        <div class="blog-grid">
          @for (post of posts; track post.id) {
            <article class="blog-card" (click)="modalService.openArticle(post)">
              <div class="blog-image-wrapper">
                <img [src]="post.image" [alt]="post.title" class="blog-img" loading="lazy">
                <div class="blog-overlay"></div>
                <span class="cat-badge">{{ post.category }}</span>
              </div>

              <div class="blog-content">
                <div class="meta-row">
                  <span>{{ post.date }}</span>
                  <span class="dot">•</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h3 class="blog-title">{{ post.title }}</h3>
                <p class="blog-excerpt">{{ post.excerpt }}</p>

                <div class="author-row">
                  <img [src]="post.author.avatar" [alt]="post.author.name" class="author-avatar">
                  <div class="author-info">
                    <span class="author-name">{{ post.author.name }}</span>
                    <span class="author-role">{{ post.author.role }}</span>
                  </div>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog-section {
      background: var(--bg-dark);
    }

    .section-header-flex {
      display: flex;
      flex-direction: column;
      margin-bottom: 3.5rem;

      @media (min-width: 992px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      }
    }

    .blog-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .blog-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 2px;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-fast);

      &:hover {
        transform: translateY(-6px);
        border-color: var(--border-accent);

        .blog-img {
          transform: scale(1.06);
        }

        .blog-title {
          color: var(--accent-primary);
        }
      }
    }

    .blog-image-wrapper {
      position: relative;
      height: 220px;
      width: 100%;
      overflow: hidden;

      .blog-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .blog-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 50%, rgba(18,18,23,0.9) 100%);
      }

      .cat-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: var(--accent-primary);
        color: var(--text-white);
        font-family: var(--font-subheading);
        font-size: 0.7rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        padding: 0.3rem 0.8rem;
        border-radius: 2px;
      }
    }

    .blog-content {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      flex: 1;

      .meta-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.75rem;
        color: var(--text-muted);
        font-weight: 600;
        margin-bottom: 0.6rem;

        .dot { color: var(--accent-primary); }
      }

      .blog-title {
        font-family: var(--font-heading);
        font-size: 1.6rem;
        margin-bottom: 0.75rem;
        line-height: 1.1;
        transition: color var(--transition-fast);
      }

      .blog-excerpt {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        flex: 1;
      }

      .author-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding-top: 1rem;
        border-top: 1px solid var(--border-subtle);

        .author-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-info {
          display: flex;
          flex-direction: column;

          .author-name {
            font-family: var(--font-subheading);
            font-size: 0.8rem;
            font-weight: 800;
            color: var(--text-white);
          }

          .author-role {
            font-size: 0.7rem;
            color: var(--text-muted);
          }
        }
      }
    }
  `]
})
export class BlogComponent {
  modalService = inject(ModalService);
  posts: BlogPost[] = BLOG_DATA;
}
