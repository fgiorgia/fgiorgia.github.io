---
css: assets/css/projects.css
---

<div class="projects-container-grid">
  {% for project in site.projects %}
    {% assign github-username = site.social-network-links.github %}
    {% assign github-project = project.github-name %}
    {% capture github-project-link %}
      https://github.com/{{ github-username }}/{{ github-project }}
    {% endcapture %}
    <div class="project-item">
      <div class="project-item-img-container">
        <img
          class="project-item-content-img-background"
          src="{{ project.thumbnail-img | absolute_url }}"
          alt="Project thumbnail"
        >
        <img
          class="project-item-content-img"
          src="{{ project.thumbnail-img | absolute_url }}"
          alt="Project thumbnail"
        >
      </div>
      <div class="project-item-content-container">
        <div class="project-item-text-container">
          <a class="project-title-link" href="{{ github-project-link }}" target="__blank">
            <h4>{{ project.title }}</h4>
          </a>
          {% if project.tags.size > 0 %}
            <div class="project-tags-container">
              {% for tag in project.tags %}
                <a
                  class="project-tag"
                  href="{{ '/tags' | absolute_url }}#{{- tag -}}">{{- tag -}}
                </a>
              {% endfor %}
            </div>
          {% endif %}
          <div class="project-item-content-text">
            {{ project.content | markdownify }}
          </div>
          <a class="project-item-content-readmore" href="{{ github-project-link }}" target="__blank">
            <p>Read More</p>
          </a>
        </div>
        <div class="project-github-container">
          <a class="project-github-link" href="{{ github-project-link }}" target="__blank">
            <i class="fab fa-github"></i> {{ github-project }}
          </a>
          {% capture github-watch-button-url %}
            https://ghbtns.com/github-btn.html?user={{ github-username }}=twbs&repo={{ github-project }}&type=watch&v=2
          {% endcapture %}
          <iframe src="{{ github-watch-button-url }}" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
