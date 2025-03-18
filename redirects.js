const redirectData = [];
const blogPaginations = [
  // Start blog default pagination
  { "source": "/blog/2", "destination": "/blog/all-about-headless?page=2", "permanent": false },
  { "source": "/blog/3", "destination": "/blog/all-about-headless?page=3", "permanent": false },
  { "source": "/blog/4", "destination": "/blog/all-about-headless?page=4", "permanent": false },
  { "source": "/blog/5", "destination": "/blog/all-about-headless?page=5", "permanent": false },
  { "source": "/blog/6", "destination": "/blog/all-about-headless?page=6", "permanent": false },
  { "source": "/blog/7", "destination": "/blog/all-about-headless?page=7", "permanent": false },
  { "source": "/blog/8", "destination": "/blog/all-about-headless?page=8", "permanent": false },
  { "source": "/blog/9", "destination": "/blog/all-about-headless?page=9", "permanent": false },
  { "source": "/blog/10", "destination": "/blog/all-about-headless?page=10", "permanent": false },
  { "source": "/blog/11", "destination": "/blog/all-about-headless?page=11", "permanent": false },
  { "source": "/blog/12", "destination": "/blog/all-about-headless?page=12", "permanent": false },
  { "source": "/blog/13", "destination": "/blog/all-about-headless?page=13", "permanent": false },
  { "source": "/blog/14", "destination": "/blog/all-about-headless?page=14", "permanent": false },
  { "source": "/blog/15", "destination": "/blog/all-about-headless?page=15", "permanent": false },
  { "source": "/blog/16", "destination": "/blog/all-about-headless?page=16", "permanent": false },
  { "source": "/blog/17", "destination": "/blog/all-about-headless?page=17", "permanent": false },
  { "source": "/blog/18", "destination": "/blog/all-about-headless?page=18", "permanent": false },
  { "source": "/blog/19", "destination": "/blog/all-about-headless?page=18", "permanent": false },
  { "source": "/blog/20", "destination": "/blog/all-about-headless?page=18", "permanent": false },
  { "source": "/blog/21", "destination": "/blog/all-about-headless?page=18", "permanent": false },
  { "source": "/blog/22", "destination": "/blog/all-about-headless?page=18", "permanent": false },
  { "source": "/blog/23", "destination": "/blog/all-about-headless?page=18", "permanent": false },
  { "source": "/blog/24", "destination": "/blog/all-about-headless?page=18", "permanent": false },
  // End blog default pagination
  // Start blog all-about-headless pagination
  { "source": "/blog/all-about-headless/2", "destination": "/blog/all-about-headless?page=2", "permanent": false },
  { "source": "/blog/all-about-headless/3", "destination": "/blog/all-about-headless?page=3", "permanent": false },
  { "source": "/blog/all-about-headless/4", "destination": "/blog/all-about-headless?page=4", "permanent": false },
  { "source": "/blog/all-about-headless/5", "destination": "/blog/all-about-headless?page=5", "permanent": false },
  { "source": "/blog/all-about-headless/6", "destination": "/blog/all-about-headless?page=6", "permanent": false },
  { "source": "/blog/all-about-headless/7", "destination": "/blog/all-about-headless?page=7", "permanent": false },
  { "source": "/blog/all-about-headless/8", "destination": "/blog/all-about-headless?page=8", "permanent": false },
  { "source": "/blog/all-about-headless/9", "destination": "/blog/all-about-headless?page=9", "permanent": false },
  { "source": "/blog/all-about-headless/10", "destination": "/blog/all-about-headless?page=10", "permanent": false },
  { "source": "/blog/all-about-headless/11", "destination": "/blog/all-about-headless?page=11", "permanent": false },
  { "source": "/blog/all-about-headless/12", "destination": "/blog/all-about-headless?page=11", "permanent": false },
  { "source": "/blog/all-about-headless/13", "destination": "/blog/all-about-headless?page=11", "permanent": false },
  { "source": "/blog/all-about-headless/14", "destination": "/blog/all-about-headless?page=11", "permanent": false },
  // End blog all-about-headless pagination
  // Start blog announcements pagination
  { "source": "/blog/announcements/2", "destination": "/blog/announcements?page=2", "permanent": false },
  // End blog announcements pagination
  // Start blog product-updates pagination
  { "source": "/blog/product-updates/2", "destination": "/blog/product-updates?page=2", "permanent": false },
  { "source": "/blog/product-updates/3", "destination": "/blog/product-updates?page=3", "permanent": false },
  { "source": "/blog/product-updates/4", "destination": "/blog/product-updates?page=4", "permanent": false },
  { "source": "/blog/product-updates/5", "destination": "/blog/product-updates?page=5", "permanent": false },
  { "source": "/blog/product-updates/6", "destination": "/blog/product-updates?page=5", "permanent": false },
  // Start blog product-updates pagination
  // Start blog tech-talk/ pagination
  { "source": "/blog/tech-talk/2", "destination": "/blog/tech-talk?page=2", "permanent": false },
  // End blog tech-talk/ pagination
];
const resourcePaginations = [
  // Start resources default pagination
  { "source": "/resources/2", "destination": "/resources?page=2", "permanent": false },
  { "source": "/resources/3", "destination": "/resources?page=3", "permanent": false },
  { "source": "/resources/4", "destination": "/resources?page=4", "permanent": false },
  { "source": "/resources/5", "destination": "/resources?page=5", "permanent": false },
  { "source": "/resources/6", "destination": "/resources?page=6", "permanent": false },
  { "source": "/resources/7", "destination": "/resources?page=7", "permanent": false },
  { "source": "/resources/8", "destination": "/resources?page=7", "permanent": false },
  { "source": "/resources/9", "destination": "/resources?page=7", "permanent": false },
  // End resources default pagination
  // Start resources case-study pagination
  { "source": "/resources/case-study/2", "destination": "/resources/case-study?page=2", "permanent": false },
  { "source": "/resources/case-study/3", "destination": "/resources/case-study?page=2", "permanent": false },
  // End resources case-study pagination
  // Start resources webinar pagination
  { "source": "/resources/webinar/2", "destination": "/resources/webinar?page=2", "permanent": false },
  { "source": "/resources/webinar/3", "destination": "/resources/webinar?page=3", "permanent": false },
  { "source": "/resources/webinar/4", "destination": "/resources/webinar?page=3", "permanent": false },
  // End resources webinar pagination
  // Start resources ebook pagination
  { "source": "/resources/ebook/2", "destination": "/resources/webinar?page=2", "permanent": false },
  { "source": "/resources/ebook/3", "destination": "/resources/webinar?page=2", "permanent": false },
  // End resources ebook pagination
  // Start blog-authors pagination
  { "source": "/blog/author/allison-gauss/entries/2/", "destination": "/blog/author/allison-gauss/", "permanent": false },
  { "source": "/blog/author/allison-gauss/2/", "destination": "/blog/author/allison-gauss/", "permanent": false },
  { "source": "/blog/author/varia-makagonova/2/", "destination": "/blog/author/varia-makagonova/", "permanent": false },
  { "source": "/blog/author/brent-heslop/2/", "destination": "/blog/author/brent-heslop/?page=2", "permanent": false },
  { "source": "/blog/author/brent-heslop/3/", "destination": "/blog/author/brent-heslop/?page=3", "permanent": false },
  { "source": "/blog/author/brent-heslop/entries/3/", "destination": "/blog/author/brent-heslop/?page=3", "permanent": false },
  { "source": "/blog/author/brent-heslop/4/", "destination": "/blog/author/brent-heslop/?page=4", "permanent": false },
  { "source": "/blog/author/brent-heslop/5/", "destination": "/blog/author/brent-heslop/?page=5", "permanent": false },
  { "source": "/blog/author/brent-heslop/6/", "destination": "/blog/author/brent-heslop/?page=6", "permanent": false },
  { "source": "/blog/author/brent-heslop/7/", "destination": "/blog/author/brent-heslop/?page=7", "permanent": false },
  { "source": "/blog/author/brent-heslop/8/", "destination": "/blog/author/brent-heslop/?page=7", "permanent": false },
  { "source": "/blog/author/brent-heslop/9/", "destination": "/blog/author/brent-heslop/?page=7", "permanent": false },
  { "source": "/blog/author/brent-heslop/10/", "destination": "/blog/author/brent-heslop/?page=7", "permanent": false },
  { "source": "/blog/author/dhaval-majithia/2/", "destination": "/blog/author/dhaval-majithia/?page=2", "permanent": false },
  { "source": "/blog/author/dhaval-majithia/3/", "destination": "/blog/author/dhaval-majithia/?page=2", "permanent": false },
  { "source": "/blog/author/menza-mathew/2/", "destination": "/blog/author/menza-mathew/", "permanent": false },
  // End blog-authors pagination
  // Start blog-category pagination
  { "source": "/blog/entries/20/", "destination": "/blog/?page=18", "permanent": false },
  { "source": "/blog/product-updates/entries/4/", "destination": "/blog/product-updates/?page=4", "permanent": false },
  { "source": "/blog/product-updates/entries/5/", "destination": "/blog/product-updates/?page=5", "permanent": false },
  // End blog-category pagination
];

const docsRedirects = [
  { "source": "/docs/developers/swift/", "destination": "/docs/developers/swift/api-reference/", "permanent": false }
];

// go-composable redirects
const gcRedirects = [
  { "source": "/go-composable", "destination": "/blog/composable", "permanent": false },
  { "source": "/go-composable/composable-architecture-how-to-future-proof-your-business-tech-stack", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/empowering-finance-the-composable-technology-starter-guide", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/composable-commerce-best-in-class-tools-for-the-job", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/the-costs-of-adopting-composable-architecture", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/revolutionizing-front-end-development-the-power-of-composable-design-systems", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/how-to-leverage-real-time-personalization-for-deeper-customer-engagement", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/building-a-scalable-dxp-part-one", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/how-a-composable-dxp-drives-experimentation-innovation-and-digital-transformation", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/the-impact-of-composable-commerce-on-peak-traffic-moments-black-friday-and-beyond", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/busting-four-myths-about-composable-architectures", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/how-a-mach-driven-approach-to-building-digital-experiences-fast-tracks-product-launches", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/building-a-scalable-dxp-part-two", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/composable-content-the-catalyst-for-composable-digital-experiences", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/recession-proofing-business-with-composable-architecture", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/revolutionizing-travel-mach-powered-personalized-digital-experiences", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/building-a-scalable-dxp-part-three", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/the-future-of-travel-content-unlocking-the-potential-of-composable-experiences", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/from-local-to-global-the-evolution-of-localization-strategies", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/five-composable-technology-trends-that-will-define-2024", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/how-content-modeling-powers-creative-teams-and-unburdens-your-dev-team", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/why-mach-architecture-matters", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/executives", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/digital-leaders", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/developers", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/charter", destination: "/blog/composable", permanent: false },
  { "source": "/go-composable/read", destination: "/blog/composable", permanent: false },
];

//live redirects
const liveRedirects = [
  { "source": "/live", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/dawn-foods-whats-in-your-stack", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/dawn-foods-whats-in-your-stack", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/dawn-foods-whats-in-your-stack", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/optimizing-your-composable-stack-for-large-scale-deployments", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/optimizing-your-composable-stack-for-large-scale-deployments", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/optimizing-your-composable-stack-for-large-scale-deployments", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/how-composable-makes-personalized-content-easier", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/how-composable-makes-personalized-content-easier", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/how-composable-makes-personalized-content-easier", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/power-productivity-previewing-digital-experiences-in-a-headless-environment", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/power-productivity-previewing-digital-experiences-in-a-headless-environment", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/power-productivity-previewing-digital-experiences-in-a-headless-environment", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/eliminating-friction-and-delays-in-digital-experience-delivery", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/eliminating-friction-and-delays-in-digital-experience-delivery", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/eliminating-friction-and-delays-in-digital-experience-delivery", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/how-to-fast-track-composable-digital-experience-development", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/how-to-fast-track-composable-digital-experience-development", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/how-to-fast-track-composable-digital-experience-development", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/how-to-secure-your-composable-dxp", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/how-to-secure-your-composable-dxp", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/how-to-secure-your-composable-dxp", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/thinking-composable-think-workflows", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/thinking-composable-think-workflows", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/thinking-composable-think-workflows", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/adopting-the-right-tech-strategy-for-your-company-to-go-composable", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/adopting-the-right-tech-strategy-for-your-company-to-go-composable", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/adopting-the-right-tech-strategy-for-your-company-to-go-composable", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/how-to-build-the-composable-dxp-youve-always-wanted", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/how-to-build-the-composable-dxp-youve-always-wanted", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/how-to-build-the-composable-dxp-youve-always-wanted", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/how-retailers-can-create-better-digital-experiences-with-composable-technology", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/how-retailers-can-create-better-digital-experiences-with-composable-technology", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/how-retailers-can-create-better-digital-experiences-with-composable-technology", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/putting-the-ai-in-retail-exploring-its-full-potential-with-epam-and-aprimo", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/putting-the-ai-in-retail-exploring-its-full-potential-with-epam-and-aprimo", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/putting-the-ai-in-retail-exploring-its-full-potential-with-epam-and-aprimo", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/how-to-simplify-tech-stack-integrations", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/how-to-simplify-tech-stack-integrations", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/how-to-simplify-tech-stack-integrations", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/how-to-use-a-composable-stack-to-drive-digital-marketing-innovation", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/how-to-use-a-composable-stack-to-drive-digital-marketing-innovation", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/how-to-use-a-composable-stack-to-drive-digital-marketing-innovation", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/why-digital-first-marketing-starts-with-a-composable-dxp", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/why-digital-first-marketing-starts-with-a-composable-dxp", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/why-digital-first-marketing-starts-with-a-composable-dxp", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/chatgpt-and-the-future-of-ai-driven-composability", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/chatgpt-and-the-future-of-ai-driven-composability", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/chatgpt-and-the-future-of-ai-driven-composability", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/live/using-the-aws-marketplace-to-optimize-your-digital-experience-investments", "destination": "/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/de/live/using-the-aws-marketplace-to-optimize-your-digital-experience-investments", "destination": "/de/podcasts/people-changing-enterprises", "permanent": false },
  { "source": "/fr/live/using-the-aws-marketplace-to-optimize-your-digital-experience-investments", "destination": "/fr/podcasts/people-changing-enterprises", "permanent": false },
]

const removeTrailingSlash = (url) => {
  const index = url.length - 1;
  let newUrl;
  if (url.charAt(index) === '/') {
    newUrl = url.slice(0, -1);
  } else {
    newUrl = url;
  }
  return newUrl ? newUrl : '/';
}

const fetchMarketingRedirects = async (context, includeCount = false, skipValue = 0) => {
  let fetchUrl = `https://cdn.contentstack.io/v3/content_types/redirects/entries?` +
    `environment=${context.env.ENVIRONMENT}`;
  const headers = {
    api_key: context.env.API_KEY,
    access_token: context.env.DELIVERY_TOKEN
  };

  if (includeCount) {
    fetchUrl = `${fetchUrl}&include_count=true`;
  }
  if (skipValue) {
    fetchUrl = `${fetchUrl}&skip=${100 * skipValue}`;
  }

  const status = {};
  return fetch(fetchUrl, { headers }).then((response) => {
    status.statusCode = response.status;
    status.statusText = response.statusText;
    return response.json();
  }).then(async (response) => {
    if (response?.entries?.length) {
      for (const entry of response.entries) {
        const redirectObj = {
          source: removeTrailingSlash(entry.from), //.replace(/\/$/, ""),
          destination: removeTrailingSlash(entry.to),
          permanent: entry.permanent_redirect || false
        };
        redirectData.push(redirectObj);
      }

      if (response.count > 100) {
        let count = Math.round(response.count / 100);
        const prArr = [];
        for (let i = 1; i <= count; i++) {
          const idx = i;
          prArr.push(fetchMarketingRedirects(context, false, idx));
        }
        await Promise.all(prArr);
      }
      return response;
    }
  });

};

const fetchDocsRedirects = async (context, includeCount = false, skipValue = 0) => {
  let fetchUrl = `https://cdn.contentstack.io/v3/content_types/server_redirects/entries?` +
    `environment=${context.env.DOCS_ENVIRONMENT}`;
  const headers = {
    api_key: context.env.DOCS_API_KEY,
    access_token: context.env.DOCS_DELIVERY_TOKEN
  };

  if (includeCount) {
    fetchUrl = `${fetchUrl}&include_count=true`;
  }
  if (skipValue) {
    fetchUrl = `${fetchUrl}&skip=${100 * skipValue}`;
  }

  const status = {};
  return fetch(fetchUrl, { headers }).then((response) => {
    status.statusCode = response.status;
    status.statusText = response.statusText;
    return response.json();
  }).then(async (response) => {
    if (response?.entries?.length) {
      for (const entry of response.entries) {
        if (entry.from.indexOf('/') === 0 && entry.from.indexOf('/docs') === -1) {
          entry.from = `/docs${entry.from}`;
        }
        if (entry.to.indexOf('/') === 0 && entry.to.indexOf('/docs') === -1) {
          entry.to = `/docs${entry.to}`;
        }
        const redirectObj = {
          source: removeTrailingSlash(entry.from.replace('/platforms/', '/developers/')), //.replace(/\/$/, ""),
          destination: removeTrailingSlash(entry.to.replace('/platforms/', '/developers/')),
          permanent: entry.permanent_redirect || false
        };
        redirectData.push(redirectObj);
      }

      if (response.count > 100) {
        let count = Math.round(response.count / 100);
        const prArr = [];
        for (let i = 1; i <= count; i++) {
          const idx = i;
          prArr.push(fetchDocsRedirects(context, false, idx));
        }
        await Promise.all(prArr);
      }
      return response;
    }
  });

};

const getRedirects = async (context) => {
  
  blogPaginations.forEach(redirect => {
    redirectData.push(redirect);
  });
  
  resourcePaginations.forEach(redirect => {
    redirectData.push(redirect);
  });
  
  docsRedirects.forEach(redirect => {
    redirectData.push(redirect);
  });

  gcRedirects.forEach(redirect => {
    redirectData.push(redirect);
  });

  liveRedirects.forEach(redirect => {
    redirectData.push(redirect);
  });
  
  await Promise.all([
    fetchMarketingRedirects(context, true, 0),
    fetchDocsRedirects(context, true, 0)
  ])
  return redirectData;
}

module.exports = getRedirects;