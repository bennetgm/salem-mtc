import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import PersonCard from "@/components/PersonCard";
import Hero from "@/components/Hero";
import Image from "next/image";
import { leaders, marThomaChurch } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <Hero 
        eyebrow="About Salem" 
        title="A Mar Thoma parish shaped by worship and family." 
        body={marThomaChurch.parish}
        image="/images/Church Photos/cc9b6c804fa93486d37b8987367c0464.jpg"
      />

      <Section eyebrow="Heritage" title="Rooted in History" intro="Our identity is shaped by an ancient faith and a modern witness.">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/Front Page Thumbnails/Altar.jpeg" 
              alt="Church Altar" 
              fill 
              className="object-cover"
            />
          </div>
          <GlassCard className="h-full flex flex-col justify-center">
            <h3 className="card-title">Our Church Heritage</h3>
            <p className="section-copy mt-6">
              {marThomaChurch.identity}
            </p>
            <p className="section-copy mt-4">
              As a local parish, we share in that wider Mar Thoma witness while serving the spiritual needs of families, children, young people, and visitors in and around Southampton.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Parish Life" title="Worship and Community" className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <GlassCard>
              <h3 className="card-title">A Living Community</h3>
              <ul className="mt-6 space-y-4">
                <li className="section-copy">{marThomaChurch.worship}</li>
                <li className="section-copy">Parish life includes Holy Qurbana, ordinary worship, area prayer meetings, Sunday School, and ministry gatherings through the year.</li>
                <li className="section-copy">Visitors can expect reverent worship, warm fellowship, and a community that values scripture, prayer, and service.</li>
              </ul>
            </GlassCard>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Church Photos/Choir.jpg" alt="Choir" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/Church Photos/Prayer Meeting.jpg" alt="Prayer Meeting" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[16/10] lg:aspect-auto h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/Church Photos/VBS.jpg" 
              alt="Community Gathering" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <p className="text-white text-lg font-medium">Faith formation across generations.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Office bearers and ministry leads." intro="The parish is served by clergy, office bearers, and ministry leaders who help guide worship, administration, pastoral care, and community life.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {leaders.clergy.concat(leaders.executive).map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>
    </div>
  );
}
