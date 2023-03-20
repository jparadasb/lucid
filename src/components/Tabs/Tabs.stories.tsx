import React from "react";

import { Tabs } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Tab",
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    showNavigation: {
      control: {
        type: "boolean",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Tabs {...args} showNavigation={true} defaultActiveTab="first">
    <Tabs.Item eventKey="first" title="First tab" icon="😭">
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illum
        a repudiandae eos excepturi dignissimos consequuntur recusandae
        accusamus amet unde dolorum blanditiis magnam, doloribus laboriosam?
        Exercitationem quidem ratione a maiores! Eveniet vitae corporis facilis
        voluptatem aliquam rem deleniti, expedita, porro exercitationem
        architecto velit. Nemo, quos! Magni, rerum. Repellat harum fugit nobis
        eveniet fugiat illum adipisci ullam temporibus! Vel, accusamus
        architecto? Delectus perspiciatis magni cum quo tempora iure porro,
        magnam, ab modi ipsum sapiente explicabo odit sunt ad mollitia debitis
        quibusdam saepe nulla? Obcaecati voluptate harum corporis aspernatur
        nemo ea cupiditate?
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="second" title="Second tab" icon="😄">
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        sequi nulla eveniet quam similique harum, aliquid officiis reiciendis
        vero. Repudiandae facere, ipsam sed praesentium laborum enim quod sunt
        fugiat iure. Ipsam ut tempora quod beatae impedit quos, reprehenderit
        doloribus esse doloremque accusantium voluptatum laborum porro, dolorem
        veniam, assumenda odio libero itaque iure perspiciatis! Officiis
        laboriosam explicabo fugit eaque quis fuga! Aperiam saepe omnis rem,
        ipsam odio facere sequi maxime distinctio est. Cum, labore repudiandae.
        Quidem distinctio eligendi at harum pariatur, ipsum dolores veritatis
        enim amet corporis quis incidunt repellendus natus? Repellendus nesciunt
        voluptas repudiandae alias similique, nostrum eveniet, optio corporis
        accusantium, exercitationem temporibus doloribus. Autem atque doloribus
        dignissimos ex ullam, quibusdam aut expedita nemo possimus accusantium
        ad beatae est velit. Facere optio nostrum pariatur ad assumenda hic
        accusantium. Praesentium cum distinctio commodi quaerat molestias fugit
        temporibus rem placeat voluptatibus expedita quas corrupti omnis,
        nostrum amet recusandae veritatis ratione pariatur quod? Et autem vitae
        sunt eum odio blanditiis provident magnam aliquam mollitia cumque
        deleniti nihil obcaecati perferendis sed, dolor aliquid. Dolore aliquam
        pariatur cumque recusandae voluptate alias quia iure quod quidem!
        Delectus quasi minima illum ipsum ratione et sint aliquam beatae facere
        quisquam itaque tempore velit est natus, excepturi fugiat, omnis eius
        corrupti. Magnam quae quam eos ipsam ex unde fugit. Quisquam quam
        dolorem animi neque officiis, debitis aperiam beatae praesentium
        temporibus, alias necessitatibus laboriosam! Officia laborum accusamus
        sequi repellat, officiis molestiae voluptas atque omnis, a minima
        dignissimos saepe quod consequuntur! Qui non adipisci iste amet.
        Asperiores aperiam nam odit dolore alias ad officiis ducimus quidem
        vitae consequatur tempora reiciendis esse dolores, ratione vel
        perferendis et tempore pariatur commodi. Doloribus, sit? Vel cupiditate,
        fuga incidunt praesentium odit minus, ipsam vitae iste quod voluptatum
        mollitia, a ipsa! Provident quos expedita, accusantium eos explicabo
        odit quibusdam id architecto ratione, magni incidunt cumque voluptate!
        Adipisci animi possimus rerum nesciunt cupiditate sed, porro iste fugiat
        ex labore, natus voluptas rem? Sequi voluptate incidunt aliquid
        voluptatum esse perferendis eum. Quae ipsum, illum ullam quod voluptas
        dolorem? Asperiores odio rerum fuga corrupti mollitia inventore commodi
        sequi libero ducimus pariatur cum odit quaerat sit aliquid maxime minus,
        sapiente consequatur minima ab autem praesentium eligendi quo
        accusantium. Nihil, nostrum?
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="third" title="Third tab" icon="🐕️">
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisl nec ultricies lacinia, nisl nisl aliquet lorem, nec
        tincidunt nisl nisl nec nisl. Nullam consectetur, nisl nec ultricies
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_10" title="title number 10" icon="🐷">
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        maiores, unde esse repellendus libero laboriosam expedita nisi nesciunt
        iure eligendi, veniam ab quidem ratione, repellat praesentium sit animi
        dignissimos ipsam.
        <p>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nulla
            saepe unde aliquam numquam recusandae modi! Dolore, vitae! Itaque
            enim nulla corrupti animi corporis eum cumque assumenda culpa!
            Explicabo, nobis.
          </span>
          <span>
            Eligendi eaque, similique ipsam illo voluptatibus dolor quia
            blanditiis ut cumque excepturi iusto doloremque rerum natus
            quibusdam ipsa, sapiente nam pariatur dolorum corporis aliquid
            commodi voluptatum dignissimos tempore! Maxime, perferendis.
          </span>
        </p>
      </h1>
    </Tabs.Item>
    <Tabs.Item eventKey="next_100" title="title number 100" icon="🐷">
      <h1>
        Rerum ipsa ratione fugiat reiciendis adipisci libero sequi itaque,
        magni, temporibus error voluptatibus commodi! Ad nisi est, tempora, rem
        natus dolor non, sed libero eius voluptatem mollitia maiores beatae et!
        <p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            fugit omnis reprehenderit perferendis corporis officia qui, illum
            nam ipsa dolor culpa aspernatur incidunt adipisci voluptatum
            impedit? Dolorum minus voluptates laudantium!
          </span>
          <span>
            Officia doloribus a culpa quam inventore iste facere atque molestiae
            eveniet harum eius distinctio cupiditate, illo, excepturi animi
            earum provident? Expedita minima aliquid adipisci ipsum quis
            distinctio ab aut architecto.
          </span>
        </p>
      </h1>
    </Tabs.Item>
    <Tabs.Item eventKey="next_1000" title="title number 1000" icon="🐷">
      <h1>
        Et iure doloribus nemo fugit blanditiis velit deleniti eaque quisquam
        excepturi provident maxime inventore hic corporis, architecto
        perferendis nihil dolorem, ex eum dolorum non! Excepturi assumenda
        perferendis deserunt possimus magni!
        <p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            quibusdam quasi voluptas at voluptatem dolor, a impedit beatae
            temporibus odio ex autem veritatis quidem quos facere ipsam repellat
            quisquam facilis.
          </span>
          <span>
            Temporibus porro iure culpa, expedita sit recusandae perferendis
            iste laborum impedit? Cum eum corporis doloribus in laborum officiis
            pariatur doloremque enim rerum recusandae, necessitatibus sunt, rem
            culpa nesciunt accusamus vitae?
          </span>
        </p>
      </h1>
    </Tabs.Item>
    <Tabs.Item eventKey="next_2" title="title number 2" icon="🐷">
      <h1>
        Dolorum tenetur numquam repellat aut vel cupiditate consectetur soluta,
        necessitatibus, totam recusandae maxime vero molestias dolore nulla?
        Debitis exercitationem velit eos, unde cupiditate ipsum dolore
        reprehenderit id ex sequi reiciendis.
        <p>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur veniam magnam debitis perspiciatis rerum earum vitae
            quis consectetur sed quod omnis voluptates voluptatum, dolore
            exercitationem sapiente quisquam dolor placeat ut?
          </span>
          <span>
            Ipsum, neque eum. Voluptate minima quam aut dolorum reprehenderit
            harum voluptatum, mollitia, itaque iusto, facere excepturi quasi
            minus deserunt odio sapiente! Dolorem cupiditate excepturi
            architecto vitae non quo alias aliquid!
          </span>
        </p>
      </h1>
    </Tabs.Item>
    <Tabs.Item eventKey="next_3" title="title number 3" icon="🐷">
      <h1>
        Suscipit, autem in molestias officia ipsam libero voluptatem veritatis
        id enim, incidunt quas itaque delectus aliquam facilis quod! Sunt ipsum
        tenetur nulla aliquam magni repudiandae aliquid dolores nisi sapiente
        quibusdam.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum
          impedit dolore ratione iusto, quibusdam consectetur iste corporis
          obcaecati quaerat, quis, voluptatum ipsa. Asperiores corrupti
          recusandae incidunt dolorum quaerat fugiat.
        </span>
        <span>
          Praesentium consequatur ullam accusamus quod nesciunt fugiat rem
          veritatis est consectetur non. Exercitationem natus, veniam nihil
          libero corporis voluptas est vel iste blanditiis recusandae.
          Voluptatibus eos reprehenderit exercitationem nam quo!
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_4" title="title number 4" icon="🐷">
      <h1>
        Minima temporibus itaque, voluptas dolorum sequi esse facilis nostrum
        laborum consequuntur perferendis ducimus veniam placeat incidunt in,
        officiis maxime magni a atque architecto minus! Dolor error in esse
        impedit provident.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere
          quasi quas dolorum excepturi, nostrum culpa? Harum nam, dignissimos
          voluptate, doloribus cupiditate similique sequi quisquam at ad
          veritatis consectetur vitae?
        </span>
        <span>
          Natus enim distinctio soluta deleniti quas totam quae explicabo iure
          odio, quam perspiciatis corrupti! Obcaecati veritatis voluptatibus
          veniam mollitia porro ab voluptatem quasi? Dolore, velit. Neque
          quisquam molestias ut unde.
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_5" title="title number 5" icon="🐷">
      <h1>
        Autem tempore dolore voluptates! Ipsam illum quasi dolorum consequuntur
        quos. Voluptatum eligendi aperiam velit autem quae iusto dolorem enim
        nemo, vel ea ipsum totam laborum qui deserunt corrupti repellat in!
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis
          ipsum molestiae asperiores nam quasi repellendus doloremque expedita
          aliquam, minus ad in velit ratione pariatur quia architecto placeat.
          Aperiam, laborum?
        </span>
        <span>
          Temporibus quis corrupti ipsum nisi! Provident maxime earum ea quas ut
          id consequuntur aliquid delectus, velit animi, corrupti perspiciatis
          aspernatur aperiam. Sit deserunt nemo neque voluptas ea tempora
          possimus fugit.
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_6" title="title number 6" icon="🐷">
      <h1>
        Iusto, cum reprehenderit non voluptatem incidunt quo aliquam odit
        tenetur asperiores quaerat aut ipsa dolorum vel debitis quis consequatur
        consectetur sit cumque ex amet quasi qui! Libero alias ipsum esse.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          velit aperiam laudantium? Corrupti porro ad nobis id delectus
          pariatur, recusandae qui similique earum inventore, non veritatis
          sapiente, laboriosam ex atque?
        </span>
        <span>
          Iusto eos molestiae quasi provident explicabo est error saepe non
          veritatis modi at similique, maxime ducimus dolore rem suscipit
          necessitatibus corrupti ipsa deleniti? Nam sint eius iste nulla minima
          in.
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_7" title="title number 7" icon="🐷">
      <h1>
        Tempore, molestias adipisci magni iure enim quae atque eveniet labore
        assumenda porro corrupti, error nulla! Cum culpa velit exercitationem
        maxime libero tenetur vitae suscipit corrupti aut rem. Corrupti, quo
        cumque!
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          dolorum! Quidem, consequatur nemo. Quibusdam, modi nihil, officia
          tempora, nesciunt eius maiores cum voluptatum doloremque placeat quo
          beatae! Labore, voluptatibus atque.
        </span>
        <span>
          Dolores sit dolorum veritatis nostrum repellat magni accusamus aliquam
          tenetur beatae, culpa optio eius similique maxime adipisci, distinctio
          repellendus vel nam aspernatur natus earum, accusantium at voluptas
          expedita praesentium? Illum?
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_8" title="title number 8" icon="🐷">
      <h1>
        Consequatur necessitatibus, fugit qui earum inventore voluptatibus vero
        quibusdam ab ipsa maiores animi, asperiores, totam voluptates ipsum.
        Voluptatibus, obcaecati similique. Provident quo iure quis dolorem
        distinctio optio et reiciendis ipsam.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          necessitatibus consectetur expedita inventore modi autem consequatur,
          id similique enim! Mollitia esse, tempore tempora architecto aut
          provident assumenda quia aliquam iusto?
        </span>
        <span>
          Maiores quam numquam neque, molestiae tempora blanditiis
          necessitatibus deserunt animi dolorum provident voluptatem dignissimos
          fugit laboriosam nesciunt. Sunt possimus porro voluptatum neque
          laboriosam repellat voluptatibus. Itaque quia temporibus voluptatem
          ad.
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_9" title="title number 9" icon="🐷">
      <h1>
        Placeat quasi ea debitis nobis nihil rem libero aliquid commodi
        distinctio, consectetur iusto. Rem ab sit, minima natus repudiandae
        temporibus. Ad, omnis. Odio fugit aperiam ut ipsam quae ab repudiandae!
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          delectus temporibus sed quas in nulla ducimus cupiditate! Consequatur
          nesciunt ab, impedit nam adipisci dolores qui enim? Nemo fuga eos
          numquam?
        </span>
        <span>
          Dolorum illo, debitis fugit sed velit excepturi saepe omnis. Pariatur,
          corporis dolorum distinctio rem quam veniam repellat nemo, eius minus
          ipsum dolores sunt ipsa eum molestiae minima omnis, magni ad!
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_11" title="title number 11" icon="🐷">
      <h1>
        Omnis asperiores quos tempore cupiditate excepturi magnam, laboriosam
        quae quaerat neque suscipit et, culpa officiis soluta ducimus corporis
        repellat. Doloremque magnam, reprehenderit voluptatem saepe tempora ea
        at voluptate quaerat quo.
      </h1>
      <p>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi
          deserunt perferendis quisquam animi, dolorem cumque quaerat molestiae
          quas sint laudantium neque ipsum quasi accusantium saepe quia autem
          nemo consequatur?
        </span>
        <span>
          Necessitatibus reiciendis, fuga harum eius quis illo quibusdam a eum
          excepturi repudiandae impedit ipsam illum tempora. Saepe inventore
          nihil deserunt minima. Nemo totam repellendus illo quaerat expedita
          obcaecati impedit sed.
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_12" title="title number 12" icon="🐷">
      <h1>
        In repellendus error ipsam facilis temporibus reiciendis velit quibusdam
        adipisci vel omnis similique libero cum quis magni perferendis, vero
        inventore doloremque voluptatum culpa dicta eos. Magnam quaerat porro
        iusto numquam?
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam
          voluptas impedit harum ex sed fugiat a dolores nesciunt incidunt
          praesentium porro, similique, illo totam sunt. In praesentium illo
          facere?
        </span>
        <span>
          Autem, ducimus eaque expedita at aliquid error animi facilis officia?
          Voluptatibus ducimus porro animi, consectetur debitis dolor quibusdam.
          Adipisci debitis, cumque facilis impedit totam iure inventore animi
          beatae ipsam expedita?
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_13" title="title number 13" icon="🐷">
      <h1>
        Assumenda, eaque! Dignissimos voluptate iusto id dolorem mollitia
        recusandae aut quidem, sapiente eligendi nesciunt architecto laudantium
        minus aspernatur modi, quo assumenda. Quod eum magni aliquam at animi?
        Eos, magnam recusandae.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          ab quo quasi sint aliquam, nostrum aspernatur totam reprehenderit,
          accusantium porro magnam excepturi repellendus rem suscipit quam ipsum
          ullam? Deleniti, nostrum!
        </span>
        <span>
          Reiciendis quaerat, praesentium ea laboriosam quibusdam inventore
          illum quos doloribus dolorum, culpa, eligendi sapiente. Veniam, saepe
          aut natus fuga delectus velit labore, inventore molestiae minima at
          eligendi, porro nostrum. Officia!
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_14" title="title number 14" icon="🐷">
      <h1>
        Molestias quisquam odio quas saepe sed vel corrupti delectus in quaerat
        perspiciatis ad est reiciendis repellat, atque, praesentium nam
        recusandae suscipit, sunt eveniet similique quibusdam eaque deleniti
        obcaecati? Libero, sed.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae magni
          odit quia itaque exercitationem inventore omnis, est dolor, aliquid
          corrupti praesentium. Corporis deserunt atque voluptates perferendis
          maiores repellat. Quis, eum!
        </span>
        <span>
          Quod suscipit ullam corporis qui reiciendis id, doloremque aperiam
          doloribus, molestias odit ad possimus quae debitis facere pariatur.
          Magni, animi sunt? Quisquam provident mollitia esse incidunt ex harum
          non nesciunt.
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_15" title="title number 15" icon="🐷">
      <h1>
        Obcaecati, possimus. Tenetur, praesentium. Quia, pariatur accusamus
        aliquid modi natus, recusandae nostrum perspiciatis deserunt
        necessitatibus, porro delectus dicta odit eveniet nemo laudantium atque
        quod reiciendis. Doloribus sint expedita ad quo?
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illo
          eum doloremque magnam porro sint placeat, deserunt modi sapiente
          labore tempora accusamus inventore ratione, ut delectus. Temporibus
          expedita inventore voluptatum!
        </span>
        <span>
          Totam pariatur quos non, natus vero ex architecto iusto suscipit esse
          soluta, provident porro. Sunt accusantium, ipsum sit quidem saepe
          expedita animi assumenda quo repellendus exercitationem, a enim soluta
          sed!
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_16" title="title number 16" icon="🐷">
      <h1>
        Doloremque repellendus pariatur magnam officia praesentium molestias vel
        laudantium. Rerum nam quidem, similique tempore dolor nulla beatae a ut.
        Laboriosam quasi incidunt neque sed, ad recusandae modi nulla maiores?
        Nobis.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          voluptate molestiae sint reprehenderit repellendus tenetur iure
          impedit tempora quo qui adipisci natus exercitationem doloremque
          facilis, provident expedita odio necessitatibus. Libero?
        </span>
        <span>
          Quidem nihil blanditiis, consequatur odit omnis earum iure quasi
          ducimus, quas tempore corporis laudantium saepe! Vitae saepe ea
          dolorum laudantium ipsam natus accusantium est doloribus labore
          voluptatem modi, quis molestias?
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_17" title="title number 17" icon="🐷">
      <h1>
        Quod, ducimus at? Nemo deserunt porro unde? Unde vel quis non
        praesentium. Suscipit hic necessitatibus, culpa quas ullam delectus fuga
        amet molestias voluptas? Ipsam perferendis ex explicabo ipsum, omnis
        aliquam?
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad
          sequi minus nisi? Asperiores, voluptas, adipisci non aspernatur illo
          quia fugit a nulla assumenda, ipsa aut sit obcaecati inventore eius.
        </span>
        <span>
          Tempora, ut impedit. Nam, sed optio tempore officia error doloribus id
          non in, laboriosam, harum velit illum dicta dolore magnam deleniti
          commodi expedita voluptate. A, sit! Sequi, deserunt assumenda?
          Aspernatur.
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_18" title="title number 18" icon="🐷">
      <h1>
        Quibusdam magnam nostrum quod quisquam odio modi magni incidunt, minima
        saepe, et asperiores rerum ullam impedit maxime qui tempora dolorem
        corrupti, a sit corporis delectus eveniet? Doloribus distinctio nulla
        quisquam.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquam
          eum consequuntur ullam velit ipsa in perspiciatis corporis temporibus
          praesentium modi sequi, ut cumque quas, qui repudiandae. Id, dolor in.
        </span>
        <span>
          Reprehenderit ab, laudantium modi nulla accusamus eum fugiat in nemo!
          Suscipit perferendis architecto magni quod ut sit, impedit consectetur
          nobis blanditiis, repellendus vel at, recusandae enim odio laudantium
          tempore minima!
        </span>
      </p>
    </Tabs.Item>
    <Tabs.Item eventKey="next_19" title="title number 19" icon="🐷">
      <h1>
        Eveniet ex accusantium ullam illum sequi quos corrupti incidunt quia sed
        aspernatur magni ut minus ab amet adipisci mollitia fuga, quas
        recusandae? Ex voluptas quod perspiciatis nisi, ipsam vero doloremque.
      </h1>
      <p>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          aperiam deleniti, sapiente modi cumque aspernatur laudantium rerum
          nulla consectetur eveniet ea atque iste, optio porro nesciunt
          necessitatibus tempora nobis laboriosam?
        </span>
        <span>
          Iusto provident culpa pariatur accusantium! Totam ex saepe laborum, ad
          sit deleniti maxime. Voluptate sed delectus laborum, aperiam
          consequuntur libero? Ab in esse omnis provident quam! Totam officiis
          porro aliquid?
        </span>
      </p>
    </Tabs.Item>
  </Tabs>
);

export const Primary: Story<Tabs> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Tabs",
};
