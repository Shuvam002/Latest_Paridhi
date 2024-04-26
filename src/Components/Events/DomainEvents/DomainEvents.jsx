import { Main } from "./DomainEvents.styled";
import { useParams } from "react-router-dom";
import Card from "../../Cards/Card";
import { motion } from "framer-motion";

const DomainEvents = () => {
  const { Domain } = useParams();
  const Domains = {
    coding: [
      {
        TitleText: "Bug blitz",
        Description:
          "Join our CP debugging competition, open to all, featuring on-the-spot challenges. Click now to register for this exclusive event!",
        ImageLink:
          "https://bairesdev.mo.cloudinary.net/blog/2021/01/8-Debugging-Techniques.png?tx=w_1280,q_auto",
        link: "/events/coding/Bug_blitz",
      },
      
      {
        TitleText: "Web minds",
        Description:
          "Join our website development competition featuring prelims and finals, open to all, with registration and rules available here",
        ImageLink:
          "https://bizmo.al/wp-content/uploads/2022/03/Web-Dev-Blog.png",
        link: "/events/coding/web_minds",
      },
      {
        TitleText: "Code quest",
        Description:
          "Join an exclusive two-round cp competition, comprising prelims and finals, open to all years. Click here to register now!",
        ImageLink:
          "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming.jpg",
        link: "/events/coding/code_quest",
      },

      {
        TitleText: "Codezen",
        Description:
          "Exclusive cp & mcq competition with two rounds, prelims and finals, tailored for school students and first-year participants. Click here to register!",
        ImageLink:
          "https://varthana.com/school/wp-content/uploads/2023/02/B193.jpg",
        link: "/events/coding/codezen",
      },

    ],
    manual_robitics: [
      {
        TitleText: "Triathlon",
        Description:
          "Join our exclusive bot racing competition, open to all years! Click to register and learn the rules for the challenge.",
        ImageLink:
          "https://lh6.googleusercontent.com/proxy/jK39yGBhSgpcgneAE_-ZhZbV6FKKqF_iPQq7a5_CaTXugcV2Afy1dviVyFFVn0Vt5XudShI9eQXBp5vYaV6Zq7QYF9cG35vLKiPx7cr0aKlcBDFpiRKMnKpX6_UtlRU",
        link: "/events/manual_robitics/triathlon",
      },
      {
        TitleText: "Robo Klassiker",
        Description:
          "Join our exclusive bot soccer competition! Bots vie for goals while minimizing penalties. Register now and learn the rules!",
        ImageLink:
          "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/627f59e8450c5_robo-scoccer.jpg",
        link: "/events/manual_robitics/robo_klassiker",
      },
      {
        TitleText: "Chakravyuh",
        Description:
          "Compete in the onspot maze-solving bot challenge, navigate tunnels, reach the exclusive destination. Click to register and learn rules!",
        ImageLink:
          "https://media.istockphoto.com/id/1225230059/photo/3d-illustration-closeup-of-black-dark-black-labyrinth-stone-walls.jpg?s=612x612&w=0&k=20&c=Wz8P936jqq8rVYZrKKuFYjOS5i5SbKI5OdI2JN2HPik=",
        link: "/events/manual_robitics/chakravyuh",
      },
      {
        TitleText: "Striker Clash",
        Description:
          "Join the exclusive onspot robo carrom competition for all, register now, and discover the rules for this thrilling event!",
        ImageLink:
          "https://images.unsplash.com/photo-1581090466144-8ed89ea98b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/manual_robitics/striker_clash",
      },
      {
        TitleText: "Throne of Bots",
        Description:
          "Join the heart-pounding bot fighting competition , open to all years! Click to register and learn the rules for the challenge. ",
        ImageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91W-T2QbTzyIhDKC_dnG8GMwBo4f7EiAgh5RR6m_7shXNdLb7gz9-PE9ENxAVhV2bUGY&usqp=CAU",
        link: "/events/manual_robitics/throne_of_bots",
      },
      
    ],
    autonomous_robotics: [
      {
        TitleText: "Line Trekker",
        Description:
          "Compete in our autonomous bot challenge, navigate a unique path, solve puzzles, and reach the destination. Click to register and learn more!",
        ImageLink:
          "https://www.electronicshub.org/wp-content/uploads/2017/03/Arduino-Line-Follower-Robot-Image-7-760x440.jpg",
        link: "/events/autonomous_robotics/line_trekker",
      },
    ],
    civil: [
      {
        TitleText: "Setu bandhan",
        Description:
          "Create a sturdy bridge using provided ice-cream sticks and glue; the strongest design, exclusive for all years, wins. Register now!",
        ImageLink:
          "https://i.pinimg.com/originals/fc/c9/67/fcc967b7de2c1c9d9d3d9debc90aaf19.jpg",
        link: "/events/civil/setu_bandhan",
      },
      {
        TitleText: "Track O Treasure",
        Description:
          "Unravel the challenge, solve riddles, and discover the treasure in this exclusive treasure hunt adventure. Register now and learn the rules!",
        ImageLink:
          "https://www.qad.com/blog/wp-content/uploads/2017/12/01.04.2018_Blog_b-min.jpg",
        link: "/events/civil/trackOtreasure",
      },
      {
        TitleText: "CAD_O_MANIA",
        Description:
          "Embark on the challenge: an AutoCAD drawing competition open to all. Click to register and unveil the competition rules.",
        ImageLink:
          "https://5.imimg.com/data5/SELLER/Default/2023/2/OP/RX/YG/6694356/autocad-designing-500x500.jpeg",
        link: "/events/civil/cad_O_mania",
      },
      {
        TitleText: "Mega Arch",
        Description:
          "Construct a load-bearing bridge using provided sand and bricks within a set time. The most robust design wins. Register for details.",
        ImageLink:
          "https://static.wixstatic.com/media/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/149872_4dc53bb4a2f947069a71604b73b34315~mv2.jpg",
        link: "/events/civil/mega_arch",
      },
    ],
    gaming: [
      {
        TitleText: "Valorant LAN",
        Description:
          "Valorant: Tactical prowess meets precise aim in dynamic multiplayer battles.",
        ImageLink:
          "https://stanforddaily.com/wp-content/uploads/2020/08/image-2.png",
        link: "/events/gaming/valorant_lan",
      },
      {
        TitleText: "BGMI",
        Description:
          "BGMI: Strategic survival, intense firefights, and victory in immersive battlegrounds.",
        ImageLink:
          "https://images.hindustantimes.com/tech/img/2021/11/28/960x540/986051-pubg-mobile-bgmi_1628314432587_1638104772146.jpg",
        link: "/events/gaming/bgmi_lan",
      },
      {
        TitleText: "E-football(PES)",
        Description:
          "E-Football: Experience the virtual pitch with skill, strategy, and teamwork.",
        ImageLink:
          "https://news.elbadil.com/wp-content/uploads/2023/09/eFootball-2024-4.jpg",
        link: "/events/gaming/eFootball",
      },
      {
        TitleText: "EAFC 2024",
        Description:
          "EAFC 2024: Dominate the digital pitch with your unrivaled football skills in electrifying worldwide tournaments.",
        ImageLink:
          "https://prod.assets.earlygamecdn.com/images/EA-FC-24-Cover-standard-edition.jpg?transform=banner2x_webp",
        link: "/events/gaming/fifa",
      },
      {
        TitleText: "8 Ball Pool",
        Description:
          "8 Ball Pool: Unleash the pool champion inside you in this thrilling competition.",
        ImageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAzRDCGMgSw6OjSIX-7Cn1tOwiAfU8c37Mw&s",
        link: "/events/gaming/ball_pool",
      },
    ],
    general: [
      {
        TitleText: "Carrom",
        Description:
          "Experience the thrill of a carrom tournament. Click to register and uncover the rules for this exciting event.",
        ImageLink:
          "https://www.mpl.live/blog/wp-content/uploads/2020/11/shutterstock_1106162195-scaled.jpg",
        link: "/events/general/carrom",
      },
      {
        TitleText: "Table Tennis",
        Description:
          "Embark on a thrilling table tennis journey to rediscover your childhood joy. Click to register and uncover the rules today!",
        ImageLink:
          "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/momhllweruehw0ud2m2r",
        link: "/events/general/table_tennis",
      },
      {
        TitleText: "Binge Quiz",
        Description:
          "Embark on an intriguing quiz journey! Click to register and unveil the rules of this captivating binge-worthy challenge.",
        ImageLink:
          "https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg",
        link: "/events/general/binge_quiz",
      },
      {
        TitleText: "Chess",
        Description:
          "Register for a chess competition to test your skills & intellect. Click to unravel the challenge and learn the rules elegantly.",
        ImageLink:
          "https://www.woodenearth.com/cdn/shop/articles/disadvantages-of-chess_1024x1024.jpg?v=1676970151",
        link: "/events/general/chess",
      },
      {
        TitleText: "Darts",
        Description:
          "Test your aim with dart challenges! Click to register and learn the rules. Unveil your aiming prowess in this thrilling game.",
        ImageLink:
          "https://www.shutterstock.com/image-photo/darts-arrows-target-center-600nw-135168692.jpg",
        link: "/events/general/darts",
      },
    ],
    electrical: [
      {
        TitleText: "ElectriQuest",
        Description:
          "Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
        ImageLink:
          "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/04/electrical_component/9636951-4-eng-GB/Electrical_component_pillars.jpg",
        link: "/events/electrical/electriQuest",
      },
      {
        TitleText: "PowerBlitz",
        Description:
          "Dive into Paridhi's dynamic electrical domain events: Electroquest, Powerblitz. Discover thrilling opportunities by clicking the card. Join us now!",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/electrical/powerBlitz",
      },
    ],
  };

  return (
    <>
      <Main>
        {Domains[Domain] &&
          Domains[Domain].map((data, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.3,
                delay: index * 0.2,
              }}
            >
              <Card
                key={data.TitleText}
                TitleText={data.TitleText}
                Description={data.Description}
                ImageLink={data.ImageLink}
                link={data.link}
              />
            </motion.div>
          ))}
      </Main>
    </>
  );
};

export default DomainEvents;
