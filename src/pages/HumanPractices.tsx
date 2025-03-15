import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Heart,
  Lightbulb,
  Compass,
  UserCheck,
  ChevronRight,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import ContentSection from "@/components/ContentSection";
import InfoCard from "@/components/InfoCard";
import PracticeItem from "@/components/PracticeItem";
import BackToTopButton from "@/components/BackToTopButton";

const sideNavItems = [
  { title: "Overview", path: "#overview" },
  { title: "Stakeholder Engagement", path: "#stakeholder-engagement" },
  { title: "Community Engagement", path: "#community-engagement" },
  { title: "Carine Research", path: "#carine-research" },
  { title: "Values", path: "#values" },
  { title: "Insights & Reflections", path: "#insights" },
];

const HumanPractices = () => {
  const [activeTab, setActiveTab] = useState("first-stakeholders");

  return (
    <div className="min-h-screen bg-sea-50">
      <Navbar />

      <HeroSection
        title="Human Practices"
        quote="Human Practices is the study of how your work affects the world, and how the world affects your work."
        quoteAuthor="Peter Carr, Director of Judging"
        backgroundImage="/images/image-3.png"
      />

      <div className="container mx-auto px-4 py-16 md:px-6" id="content">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SideNav items={sideNavItems} />
          </div>

          <div className="lg:col-span-3">
            <ContentSection id="overview" title="Overview">
              <div className="mb-8 glass-card p-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Ghana's coastline faces severe coastal erosion and plastic
                  pollution threats, impacting marine ecosystems and coastal
                  communities. Towns like Keta, Busua, and Ada are losing land
                  to rising sea levels, displacing residents and endangering
                  infrastructure. Plastic waste, mainly from the 8.2 billion
                  water sachets consumed annually (Stoler, 2017), clogs
                  waterways and contaminates the ocean, worsening the situation.
                  Ghana ranked 188th out of 221 countries on the Ocean Health
                  Index in 2019 (Miezah et al., 2019), and inadequate pollutant
                  monitoring leaves communities vulnerable.
                </p>
              </div>

              <div className="my-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <h3 className="bg-sea-700 text-white font-heading font-semibold text-xl p-4 text-center">
                    Integrated Human Practices
                  </h3>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <PracticeItem
                        icon={<BookOpen className="h-6 w-6 text-white" />}
                        title="Education and Outreach"
                        description="Education and outreach are crucial for our project, raising awareness about plastic pollution and coastal erosion. We encourage eco-friendly behaviors and active participation in conservation efforts by empowering the community with knowledge."
                      />

                      <PracticeItem
                        icon={<Users className="h-6 w-6 text-white" />}
                        title="Community Engagement"
                        description="Community engagement was vital in our project, building trust and ensuring our solutions were relevant to those affected. This collaboration fostered ownership and empowered residents in sustainability efforts, ensuring the long-term success of our initiatives."
                      />

                      <PracticeItem
                        icon={<UserCheck className="h-6 w-6 text-white" />}
                        title="Stakeholder Engagement"
                        description="Stakeholder engagement is essential for effectively addressing plastic pollution and coastal erosion. It helps ensure that our solutions are practical, sustainable, and tailored to the community's needs."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-12">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Our solution harnesses synthetic biology to combat both
                  coastal erosion and plastic pollution. Through stakeholder
                  engagement and education, we explored how our approach can
                  offer sustainable, community-driven solutions. We aim to
                  create cleaner, more resilient coastlines by addressing
                  concerns and promoting collaboration. By harnessing the power
                  of synthetic biology to address these urgent issues, we want
                  to ensure our approach is responsible and genuinely
                  beneficial. This reflective journey helps us assess our
                  motivations, consider the impact of our solutions on people's
                  lives, and see how our efforts can lead to cleaner, more
                  resilient coastlines for everyone.
                </p>

                <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                  Our human practices included stakeholder engagement, Education
                  and Outreach and community engagement. However, concepts such
                  as inclusivity and research also stand out in our work.
                </p>
              </div>
            </ContentSection>

            <ContentSection
              id="stakeholder-engagement"
              title="Stakeholder Engagement"
            >
              <div className="mb-8">
                <p className="text-lg text-gray-800 leading-relaxed">
                  We wanted our project to make a real difference in coastal
                  communities by listening to and addressing their concerns. Our
                  approach focused on working directly with those most affected,
                  including coastal residents and environmental groups, to find
                  practical and sustainable solutions for plastic pollution and
                  coastal erosion.
                </p>

                <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                  On July 27, we visited Borla Beach, a community deeply
                  impacted by pollution and erosion. We spoke with around 25
                  community members, asking questions to understand their
                  struggles, past efforts, and hopes for the future. This visit
                  was eye-opening for our team. We learned that the problem
                  wasn't just about improper waste disposal—it was also about
                  gaps in government action. The sea, we found, had taken more
                  than land from these residents; some had even lost loved ones
                  to its unforgiving tides.
                </p>

                <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                  The challenges they shared underscored the need for solutions
                  that address plastic pollution and coastal erosion in an
                  integrated way. This is not just about environmental
                  sustainability; it's about protecting lives and improving
                  public health. Our commitment as a team is clear: we want to
                  protect people from the sea's dangers while protecting the sea
                  from human-induced harm, starting with stopping plastic
                  pollution
                </p>
              </div>

              <div className="my-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="flex items-center border-b border-gray-200">
                    <button
                      className={`flex-1 px-4 py-3 text-center font-medium ${
                        activeTab === "first-stakeholders"
                          ? "bg-sea-500 text-white"
                          : "bg-white text-gray-700 hover:bg-sea-100"
                      }`}
                      onClick={() => setActiveTab("first-stakeholders")}
                    >
                      First Stakeholders
                    </button>
                    <button
                      className={`flex-1 px-4 py-3 text-center font-medium ${
                        activeTab === "second-stakeholders"
                          ? "bg-sea-500 text-white"
                          : "bg-white text-gray-700 hover:bg-sea-100"
                      }`}
                      onClick={() => setActiveTab("second-stakeholders")}
                    >
                      Second Stakeholders
                    </button>
                  </div>

                  <div className="p-6">
                    {activeTab === "first-stakeholders" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <ol className="list-decimal pl-5 space-y-4">
                            <li className="text-lg text-gray-800">
                              The community identified a sewage outlet as a
                              major source of the waste.
                            </li>
                            <li className="text-lg text-gray-800">
                              They described how the sea had gradually consumed
                              much of their land.
                            </li>
                            <li className="text-lg text-gray-800">
                              Past efforts to mitigate coastal erosion, such as
                              sandbags and stones, were mentioned but were
                              short-lived.
                            </li>
                            <li className="text-lg text-gray-800">
                              Their stories emphasized the urgent need for
                              lasting, sustainable solutions.
                            </li>
                            <li className="text-lg text-gray-800">
                              The sewage outlet carries waste through the main
                              parts of Accra, contributing to the alarming state
                              of the area.
                            </li>
                          </ol>
                        </div>
                        <div>
                          <img
                            src="/images/image-2.png"
                            alt="Community engagement at Borla Beach"
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                        </div>
                      </div>
                    )}

                    {activeTab === "second-stakeholders" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <img
                            src="/images/image-6.png"
                            alt="Team members interviewing local stakeholders"
                            className="w-full h-auto rounded-lg shadow-md mb-6"
                          />
                          <img
                            src="/images/image-4.png"
                            alt="Coastal erosion impact"
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                        </div>
                        <div>
                          <ol className="space-y-6">
                            <li className="flex">
                              <div className="bg-coral-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                                1
                              </div>
                              <p className="text-lg text-gray-800">
                                The sea has gradually consumed large areas of
                                land, forcing relocation.
                              </p>
                            </li>
                            <li className="flex">
                              <div className="bg-coral-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                                2
                              </div>
                              <p className="text-lg text-gray-800">
                                Government efforts with large stones have also
                                failed due to cracks.
                              </p>
                            </li>
                            <li className="flex">
                              <div className="bg-coral-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                                3
                              </div>
                              <p className="text-lg text-gray-800">
                                Some have built homes using car tires stacked 20
                                deep for stability.
                              </p>
                            </li>
                            <li className="flex">
                              <div className="bg-coral-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                                4
                              </div>
                              <p className="text-lg text-gray-800">
                                Government efforts with large stones have also
                                failed due to cracks.
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ContentSection>

            <ContentSection
              id="community-engagement"
              title="Community Engagement And Collaborations"
            >
              <div className="mb-8">
                <p className="text-lg text-gray-800 leading-relaxed">
                  In honor of World Rivers Day, our team participated in a
                  cleanup at Laboma Beach, addressing plastic pollution and
                  coastal erosion. Supported by organizations such as CMA CGM,
                  Ghana Wildlife Society, and Bel Aqua, volunteers collected 106
                  kg of plastic waste. The event highlighted the environmental
                  challenges coastal communities face, with an executive from
                  Lions International stressing the need for long-term solutions
                  and increased government investment to protect beaches. We
                  explored using genetically modified organisms (GMOs) to
                  degrade plastic, a concept welcomed but met with concerns
                  about its impact on sea ecology.
                </p>

                <p className="mt-6 text-lg text-gray-800 leading-relaxed">
                  Key takeaways included deeper insights into the struggles of
                  coastal residents with erosion and solid tides, motivating us
                  to focus on designing durable sea defense walls. The cleanup
                  reinforced our commitment to healthier coastlines and the
                  importance of community involvement in shaping sustainable,
                  innovative solutions that align with our goals for the iGEM
                  competition.
                </p>
              </div>

              <div className="my-8">
                <div className="bg-coral-500 p-1 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <img
                      src="/images/image-4.png"
                      alt="Team cleanup activity"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <img
                      src="/images/image-2.png"
                      alt="Beach cleanup volunteers"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </ContentSection>

            <ContentSection id="carine-research" title="Carine Research">
              <div className="glass-card p-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Our research explores innovative approaches to address both
                  coastal erosion and plastic pollution through biotechnology.
                  By examining case studies from similar coastal regions and
                  consulting with marine biologists, we've developed potential
                  sustainable solutions that protect shorelines while reducing
                  plastic waste.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-sea-700">
                  Key Research Findings:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>
                    Microbial enzymes can break down common plastics into
                    non-toxic components
                  </li>
                  <li>
                    Biostructures combining natural materials with engineered
                    components show promise for durable sea defenses
                  </li>
                  <li>
                    Local ecological factors significantly impact the
                    effectiveness of both erosion control and bioremediation
                    efforts
                  </li>
                  <li>
                    Community-based monitoring systems improve long-term
                    sustainability of environmental interventions
                  </li>
                </ul>

                <div className="mt-6 flex justify-center">
                  <Link
                    to="#"
                    className="inline-flex items-center px-4 py-2 bg-sea-600 text-white rounded-md hover:bg-sea-700 transition-colors"
                  >
                    View Full Research Report{" "}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ContentSection>

            <ContentSection id="values" title="Values">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                  title="Sustainability"
                  icon={<Heart className="h-5 w-5" />}
                >
                  <p className="text-gray-700">
                    We are committed to creating solutions that not only address
                    immediate problems but can be maintained over time with
                    minimal environmental impact. Our approaches prioritize
                    long-term ecological balance.
                  </p>
                </InfoCard>

                <InfoCard
                  title="Community Empowerment"
                  icon={<Users className="h-5 w-5" />}
                >
                  <p className="text-gray-700">
                    We believe that lasting change comes from within
                    communities. Our work aims to provide tools, knowledge, and
                    resources that enable local residents to become stewards of
                    their own environment.
                  </p>
                </InfoCard>

                <InfoCard
                  title="Scientific Integrity"
                  icon={<Compass className="h-5 w-5" />}
                >
                  <p className="text-gray-700">
                    All our solutions are grounded in rigorous research and
                    evidence-based approaches. We maintain transparency about
                    our methods and results, and welcome scientific scrutiny of
                    our work.
                  </p>
                </InfoCard>

                <InfoCard
                  title="Innovation"
                  icon={<Lightbulb className="h-5 w-5" />}
                >
                  <p className="text-gray-700">
                    We constantly seek creative approaches to complex problems,
                    combining traditional knowledge with cutting-edge
                    biotechnology. We're not afraid to explore uncharted
                    territory when conventional methods fall short.
                  </p>
                </InfoCard>
              </div>
            </ContentSection>

            <ContentSection id="insights" title="Insights And Reflections">
              <div className="glass-card p-6">
                <div className="prose prose-lg max-w-none">
                  <p>
                    Our journey through this project has revealed several
                    important insights about the intersection of synthetic
                    biology, environmental conservation, and community
                    engagement:
                  </p>

                  <ol className="mt-4 space-y-4">
                    <li>
                      <strong>Local knowledge is invaluable.</strong> The
                      communities we worked with possessed deep understanding of
                      coastal patterns and changes that no scientific paper
                      could have provided. Their experiences shaped our
                      technical approaches in fundamental ways.
                    </li>

                    <li>
                      <strong>Trust takes time to build.</strong> Initial
                      skepticism about biotechnology solutions was common.
                      Transparent communication and education were essential to
                      gaining community support.
                    </li>

                    <li>
                      <strong>Holistic approaches are necessary.</strong> We
                      found that addressing coastal erosion or plastic pollution
                      in isolation was insufficient - these challenges are
                      deeply interconnected and require integrated solutions.
                    </li>

                    <li>
                      <strong>Science communication matters.</strong> Our
                      ability to explain complex biological concepts in
                      accessible language directly impacted stakeholder
                      acceptance and engagement.
                    </li>

                    <li>
                      <strong>Flexibility is key.</strong> Several times
                      throughout our project, we needed to pivot our approach
                      based on new information or feedback. This adaptability
                      strengthened rather than weakened our work.
                    </li>
                  </ol>

                  <p className="mt-6">
                    These insights will continue to guide our approach as we
                    refine and implement our solutions. We believe the most
                    valuable outcome of our human practices work is not just a
                    better technical solution, but a framework for collaborative
                    environmental problem-solving that centers community needs
                    and knowledge.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
        </div>
      </div>

      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default HumanPractices;
