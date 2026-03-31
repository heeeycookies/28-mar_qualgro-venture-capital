import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const newsItems = [
  {
    title: "Qualgro at Founders & Funders: ASEAN Tech All-Stars",
    category: "Qualgro in the news",
    date: "February 4, 2026",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-at-Founders-Funders-rin18aq479xg70zn714jcp1advg0gnueupum9jz2rc.jpg",
    url: "https://qualgro.com/qualgro-founders-funders-asean-weisheng-neo-vc-fundraising-advice/",
  },
  {
    title: "Qualgro Co-Leads Investment in SynaXG to Advance AI-Driven Telecom Networks",
    category: "Portfolio company",
    date: "February 4, 2026",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualro-Investment-in-SynaXG-rin12tc0c2f8gwyd7nsvt2uhmygxk82s3kunhg3r20.jpg",
    url: "https://qualgro.com/qualgro-co-leads-investment-synaxg-ai-ran-oran-telecom-networks/",
  },
  {
    title: "Qualgro at World AI Show Malaysia: Weisheng Neo on Investing in AI",
    category: "Qualgro in the news",
    date: "February 4, 2026",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-at-World-AI-Show-MY-rin0pg2n4w4fckdf9vrwcgahhod03707leu1rrxbjs.jpg",
    url: "https://qualgro.com/qualgro-world-ai-show-malaysia-weisheng-neo-ai-investment-tech-growth/",
  },
  {
    title: "Peter Huynh recognised as 'Top 50 VC Leaders Powering Singapore's Startup Revolution'",
    category: "Qualgro in the news",
    date: "November 13, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-Venture-Partner-Peter-Huynh-recognised-as-Top-50-VC-Leaders-remv5i8gl48ehgkhv7fy9tmnfjs4omwx0rgx9tn648.jpg",
    url: "https://qualgro.com/peter-huynh-top-50-vc-leaders-singapore/",
  },
  {
    title: "Weisheng Neo Shares Insights on Partnership with Appier",
    category: "Event",
    date: "November 13, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgros-General-Partner-Weisheng-Neo-Shares-Insights-on-Partnership-with-Appier-remv190rn4enx0r1pv7rheailqratz0o3p4s1pycag.jpg",
    url: "https://qualgro.com/tai-sin-summit-weisheng-neo-appier-expansion/",
  },
  {
    title: "Weisheng Neo Shares Insights on the Growing Southeast Asian Ecosystem",
    category: "Event",
    date: "November 13, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgros-and-Weisheng-Neo-remutf16oton604nghbopdg8e5d6orx70xf42pkg54.jpg",
    url: "https://qualgro.com/cradle-live-asean-summit-2025-weisheng-neo-insights/",
  },
  {
    title: "Qualgro's Feature on The Edge Malaysia",
    category: "Qualgro in the news",
    date: "November 13, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgros-Feature-on-The-Edge-Malaysia-remuhtouedtbz4yv5gxbyarkn2i7r5wdfjrizur8vs.png",
    url: "https://qualgro.com/qualgro-edge-malaysia-patsnap-interview/",
  },
  {
    title: "Badai Tanmizi shares perspective on exits in Southeast Asia",
    category: "Event",
    date: "September 10, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-4-rbj3hh4fviq19k84zmaui883n705dpe4prxr096z08.jpg",
    url: "https://qualgro.com/badai-tanmizi-penang-slushd-startup-exits/",
  },
  {
    title: "Southeast Asia Startups Going Global — KL event with 100+ attendees",
    category: "Event",
    date: "September 10, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-3-rbj3dz62fpxm1tb3f3uu840c1k8yq9i3kgiop6dq60.jpg",
    url: "https://qualgro.com/southeast-asia-startups-going-global-kuala-lumpur-2025/",
  },
  {
    title: "Weisheng Neo on helping portfolio companies scale beyond borders",
    category: "Event",
    date: "September 10, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-2-rbj33hay4bkcekjypkitdrd18nzerxu04i9hrxxznc.jpg",
    url: "https://qualgro.com/weisheng-neo-disruptinvest-summit-scaling-startups/",
  },
];

const resourceItems = [
  {
    title: "Spotting Southeast Asia's next $1B opportunity",
    category: "Article",
    date: "September 10, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Qualgro-1-rbj2mdmnru5j5ze9koe6ikq45a9zq6xtfuygfpauuw.jpg",
    url: "https://qualgro.com/weisheng-neo-fortune-brainstorm-ai-1b-opportunity/",
  },
  {
    title: "Outlook on Disciplined Investing in Southeast Asia",
    category: "Article",
    date: "April 15, 2025",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Slide1-r5i4hx10l17aqugojsiyrg4rc649qfinkzg1penfeg.png",
    url: "https://qualgro.com/qualgro-general-partner-weisheng-neo-shares-outlook-on-disciplined-investing-in-southeast-asia/",
  },
  {
    title: "The S&P Global ASEAN Economic Outlook 2024",
    category: "Article",
    date: "February 28, 2024",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/qualgro-partners_asean-economic-outlook-in-2024-activity-min-qkgpaiyo9y9bn7eacerp6ok2pj5epwkw43ik3bi7y0.jpeg",
    url: "https://qualgro.com/the-sp-global-asean-economic-outlook-2024/",
  },
  {
    title: "State of SaaS in the Philippines 2023 Report",
    category: "Thought leadership",
    date: "December 4, 2023",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/State-of-SaaS-in-the-Philippines-qmjb3o6nfgeqjj0onbpei0h3mwnt52s7yxktkbjovs.png",
    url: "https://qualgro.com/the-state-of-saas-in-the-philippines-2023/",
  },
  {
    title: "How bias minimization has enabled a more diverse portfolio",
    category: "Thought leadership",
    date: "March 10, 2023",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/IWD1-q3aluydb531o37hywgln897xfgdxuzd6exms1mnnaw.jpg",
    url: "https://qualgro.com/international-womens-day-2023-how-bias-minimization-has-enabled-a-more-diverse-portfolio-at-qualgro/",
  },
  {
    title: "Investing in Supermom",
    category: "Article",
    date: "January 16, 2023",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Supermom-Photo-scaled-q0g0oukykkwdosr6htfqs9eukk8yfbs8l7mccx17zs.jpg",
    url: "https://qualgro.com/investing-in-supermom/",
  },
  {
    title: "The profitability trade-off: How startups navigate uncertain times",
    category: "Thought leadership",
    date: "October 7, 2022",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/li4-DSC08599_websize-pydery082xlocmle59zrhvng3p9p7qnk7rm5s2kfy0.jpg",
    url: "https://qualgro.com/the-profitability-trade-off-how-startups-navigate-uncertain-times-to-achieve-quality-growth/",
  },
  {
    title: "Avoiding costly mistakes: How cognitive biases affect entrepreneurs",
    category: "Thought leadership",
    date: "September 22, 2022",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/DSC08543_websize-pydeloeyip0uy7p2qkhavgktj85lwdrzcr1mlnuxfc.jpg",
    url: "https://qualgro.com/avoiding-costly-mistakes-how-cognitive-biases-can-affect-entrepreneurs/",
  },
  {
    title: "Designing An Enduring Company Culture: the Story of Appier",
    category: "Article",
    date: "November 12, 2021",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/designing-an-enduring-company-culture-the-story-of-appier-pfxn6xiyuui8i0nugv7fq7aft9q88kglq2i3cchr5k.jpg",
    url: "https://qualgro.com/designing-an-enduring-company-culture-the-story-of-appier/",
  },
  {
    title: "How do VCs invest?",
    category: "Webinar",
    date: "July 24, 2021",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/WS-1-pf2wuu7aeoumht6sjydfrol03hbqt3p17bcfy603i0.jpg",
    url: "https://qualgro.com/how-do-vcs-invest/",
  },
  {
    title: "Fundraising Tips: Raising Seed Funding and Beyond",
    category: "Article",
    date: "April 6, 2021",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/Antler-__-Qualgro-Slides-p8mvqiw9j8d25mlp9ehtxdyosi1nuknifju38j5c54.jpg",
    url: "https://qualgro.com/fundraising-tips-raising-seed-funding-and-beyond/",
  },
  {
    title: "Dear founders, let's talk about legal terms (Part 2)",
    category: "Article",
    date: "March 9, 2021",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/tyler-franta-iusJ25iYu1c-unsplash-scaled-p8mue7yubq8lj0rlbiu0skrxto4maiw34gxtemrnw8.jpg",
    url: "https://qualgro.com/dear-founders-lets-talk-about-legal-terms-part-2/",
  },
  {
    title: "What metrics to monitor as a B2B SaaS company?",
    category: "Article",
    date: "January 27, 2021",
    image: "https://qualgro.com/wp-content/uploads/elementor/thumbs/mitchel-boot-hOf9BaYUN88-unsplash-scaled-p8mujxthwg2e5mgkxhtbgmtvx1y048lawrt5i8ag1k.jpg",
    url: "https://qualgro.com/what-metrics-to-monitor-as-a-b2b-saas-company/",
  },
];

interface CardProps {
  item: { title: string; category: string; date: string; image?: string; url: string };
  i: number;
}

const ArticleCard = ({ item, i }: CardProps) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.06 }}
    className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-investment-blue/30 transition-all"
  >
    <div className="h-48 overflow-hidden bg-muted">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-navy/80 to-investment-blue/40 flex items-center justify-center p-6">
          <span className="font-display text-sm font-semibold text-primary-foreground/80 text-center leading-snug">
            {item.title}
          </span>
        </div>
      )}
    </div>
    <div className="p-6">
      <span className="text-xs font-semibold text-emerald uppercase tracking-wide">
        {item.category}
      </span>
      <h3 className="mt-2 font-display text-base font-bold text-primary group-hover:text-investment-blue transition-colors leading-snug line-clamp-2">
        {item.title}
      </h3>
      <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>
    </div>
  </motion.a>
);

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <PageHero
        tagline="Latest"
        title={<>Qualgro News & <span className="text-gradient-page">Resources</span></>}
        description="Stay updated with the latest from Qualgro Partners — venture capital insights, portfolio company news, and thought leadership from Southeast Asia and Australia."
      />

      {/* Tabbed Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="mb-10 bg-muted/50 p-1 rounded-lg">
              <TabsTrigger value="news" className="px-6 py-2.5 font-display font-semibold text-sm data-[state=active]:bg-investment-blue data-[state=active]:text-white">
                News & Events
              </TabsTrigger>
              <TabsTrigger value="resources" className="px-6 py-2.5 font-display font-semibold text-sm data-[state=active]:bg-investment-blue data-[state=active]:text-white">
                Resources & Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="news">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item, i) => (
                  <ArticleCard key={item.title} item={item} i={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourceItems.map((item, i) => (
                  <ArticleCard key={item.title} item={item} i={i} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
