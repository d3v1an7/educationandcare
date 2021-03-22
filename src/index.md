---
layout: index
title: Education and Care
description: We believe in nurturing and protecting our most precious gifts – our children and our planet.
featured_image: /images/min/photo-yard-01.jpg
---

<section class="pb-8 md:pb-12 text-center bg-section">
  <div class="container mx-auto px-4 max-w-xl md:max-w-3xl lg:max-w-6xl">
    <div class="-mt-16 px-4 py-4 md:px-8 md:py-8 lg:px-14 lg:py-16 relative bg-white shadow-xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-none">
        {%- for centre in site.centres -%}
        <div class="pt-6 mb-6 md:pt-0 md:mb-0">
          <h3 class="mb-4 text-xl md:text-2xl lg:text-3xl text-gray-900 font-semibold">{{ centre[1].name }}</h3>
          <a href="{{ centre[1].link }}" class="block mb-4 py-6 bg-btn-blue hover:bg-btn-blue-hover text-gray-100 text-lg">Visit {{ centre[1].name }} Centre</a>
          <div class="flex items-center justify-center"><i class="mr-2" data-feather="phone"></i> {{ centre[1].phone }}</div>
        </div>
        {%- endfor -%}
      </div>
    </div>
  </div>
</section>
