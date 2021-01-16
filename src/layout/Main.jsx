import React, { useEffect, useRef, useState } from 'react';
import { html } from '../utils/environment';
import Guides from '../components/Guides';
import Hero from '../components/Hero';
import Footer from './Footer';

export default () => {
  const refScrollContainer = useRef(null);

  const mystyle = {
    color: 'white',
  };

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import('locomotive-scroll')).default;
      const options = {
        el: refScrollContainer.current,
        smooth: true,
        // reloadOnContextChange: true,
      };
      const scroll = new Locomotive(options);
      scroll.on('scroll', (instance) => {
        const scrollBottom = instance.scroll.y + window.innerHeight;
        instance.scroll.y > 20
          ? html.classList.add('has-scrolled')
          : html.classList.contains('has-scrolled') &&
            html.classList.remove('has-scrolled');

        instance.scroll.y > 300
          ? html.classList.add('has-nav')
          : html.classList.contains('has-nav') &&
            html.classList.remove('has-nav');

        scrollBottom > document.body.clientHeight - 100
          ? html.classList.add('has-scrolled-bottom')
          : html.classList.contains('has-scrolled-bottom') &&
            html.classList.remove('has-scrolled-bottom');

        const totalScroll = instance.scroll.y;
        const windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolly = `${totalScroll / windowHeight}`;

        setScroll(scrolly);
      });
    }
    getLocomotive();
  }, []);

  return (
    <main data-namespace="home" data-page="overview" style={mystyle}>
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
        />
      </div>

      <div className="o-scroll" ref={refScrollContainer}>
        <div className="o-wrap">
          <Hero />
          <section data-scroll-section>
            <div className="o-container">
              <p>
                {' '}
                Sed tortor massa, tincidunt quis finibus ac, feugiat sed sapien.
                Cras volutpat elementum sapien, et rhoncus orci mollis et. In
                vulputate ut sem nec aliquet. Donec efficitur, odio sit amet
                scelerisque pellentesque, lectus velit lacinia ipsum, ut
                scelerisque justo odio vitae sapien. Praesent et ipsum eget
                felis fringilla vulputate. Morbi eu nibh a arcu commodo molestie
                pretium a felis. Vivamus consectetur nisl et nulla ornare, quis
                malesuada ex pulvinar. Morbi vel sagittis diam, maximus aliquet
                libero. Morbi porttitor tellus purus, id tincidunt orci volutpat
                sit amet. Cras scelerisque, eros ut feugiat ultrices, ligula
                nisi vehicula orci, vel tincidunt ipsum est at sapien. In
                molestie elit quis luctus commodo. Aenean nunc ante, accumsan et
                leo nec, tincidunt mattis elit. In dui odio, ornare et interdum
                dictum, blandit a nibh. Maecenas viverra erat id odio iaculis
                libero ultrices, porta diam at, interdum leo. Curabitur luctus
                dictum fringilla. Sed gravida, erat in consectetur bibendum,
                massa mi efficitur nibh, et elementum enim ligula sed dui. Fusce
                at rutrum justo, a semper tortor. Nulla sapien tellus, iaculis
                eu nibh vel, sagittis eleifend nunc. Curabitur sit amet orci in
                est ornare auctor. Sed tempus egestas maximus. Praesent
                fermentum rhoncus pulvinar. Suspendisse euismod, risus eu
                blandit dignissim, sapien velit lobortis risus, nec ornare
                tellus lectus maximus elit. Mauris dapibus neque vitae nisl
                cursus lobortis. Donec dignissim elementum risus, vitae aliquam
                felis viverra vitae. Praesent auctor faucibus ante, a pulvinar
                massa convallis eget. Sed neque nibh, mattis eu ipsum in,
                elementum tempor nibh. Morbi vel dignissim mi. Sed consequat
                luctus nulla sed ultrices. Mauris eu vestibulum justo. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Donec dignissim, mi eget rutrum
                pharetra, felis lectus gravida arcu, eget hendrerit velit dolor
                vel mauris. Praesent tincidunt velit sit amet risus iaculis, sit
                amet convallis eros efficitur. Vivamus ac ligula et justo
                pellentesque ullamcorper. Vivamus tortor ligula, sollicitudin et
                sapien in, suscipit facilisis sapien. Curabitur pharetra tortor
                ac tortor placerat condimentum. Sed commodo tortor ut facilisis
                cursus. Praesent id faucibus lacus, nec tempus nibh. Proin
                bibendum neque non lorem finibus sollicitudin. Nam mollis
                elementum diam, eu egestas erat. Vestibulum ante sem, accumsan
                nec dolor nec, eleifend tempus nibh. Mauris euismod vitae justo
                nec laoreet. Nunc dignissim at turpis ut consectetur. In
                bibendum blandit augue ac posuere. Sed porttitor risus libero,
                pharetra gravida nisi ullamcorper sodales. Ut ut massa egestas
                sapien dapibus commodo. Maecenas tempus, nisi tincidunt vehicula
                cursus, nisl massa consequat augue, eu tincidunt nisi risus in
                nunc. Donec odio metus, faucibus in aliquam viverra, hendrerit
                nec felis. Pellentesque auctor leo id suscipit molestie. Ut
                tempus consectetur diam, vehicula faucibus nibh. Nulla posuere
                id ex at accumsan. Maecenas vestibulum neque neque, nec varius
                mauris maximus vitae. Duis volutpat fringilla risus nec
                facilisis. Curabitur nec elit ante. In iaculis lorem vitae augue
                aliquet, sit amet dapibus ipsum condimentum. Proin lacinia
                turpis a diam ultrices, et viverra ligula elementum. Ut ornare
                justo vel ornare elementum. Vestibulum non urna in lacus
                elementum mattis nec sed magna. Aliquam non dolor ultricies,
                pharetra eros ac, tincidunt purus. Ut lobortis maximus arcu,
                eget suscipit ligula pharetra et. Nullam suscipit lorem est, sit
                amet iaculis dolor mollis at. Phasellus mollis nisl lacus, id
                commodo libero ultrices vel. Vestibulum eget feugiat lorem. Nunc
                sagittis tellus tincidunt, tempor nunc quis, aliquam diam.
                Praesent lobortis, ante vitae maximus hendrerit, arcu enim
                sollicitudin turpis, et mattis nisi elit eu sapien. Quisque
                pulvinar lorem malesuada velit vehicula malesuada. Suspendisse
                varius felis sit amet tortor posuere posuere. Sed quis
                pellentesque turpis. Proin varius, nulla at sagittis efficitur,
                nibh magna fermentum dolor, in porta enim ex at justo. Maecenas
                lacinia odio sed imperdiet feugiat. Aliquam eleifend ipsum quis
                lorem finibus fermentum. Integer ut est neque. Aenean aliquam
                faucibus felis, quis gravida nulla cursus a. Nullam a aliquam
                elit, eu aliquet magna. Sed ornare cursus sapien nec faucibus.
                Proin id sapien id quam tincidunt vehicula mollis id mauris.
                Vivamus mi ex, aliquam ut mattis in, volutpat non mauris.
                Aliquam porttitor rhoncus maximus. Nullam feugiat ullamcorper
                neque rhoncus dapibus. Cras ornare vitae nulla ut euismod.
                Quisque massa sapien, rhoncus sed quam non, ultricies euismod
                sem. Nam blandit eros vel suscipit aliquet. Ut vehicula id
                tellus nec aliquam. Maecenas rhoncus massa nec iaculis volutpat.
                Maecenas maximus congue nisi, a vulputate metus semper et.
                Suspendisse non laoreet odio. Proin tincidunt velit neque, ac
                sagittis leo consequat malesuada. Fusce rhoncus, diam vitae
                facilisis hendrerit, tellus eros iaculis tellus, sed sagittis
                tortor ante sit amet diam. Suspendisse potenti. Mauris ultrices,
                elit at fringilla malesuada, ante mauris vehicula risus,
                consectetur porttitor diam purus a sem. Phasellus facilisis
                justo eget orci semper, a lacinia augue mollis. Curabitur
                porttitor sollicitudin dui et luctus. Phasellus vestibulum lorem
                sit amet faucibus lacinia. Aenean consectetur lorem eu leo
                congue interdum. Donec sit amet quam ac elit efficitur tempus.
                Nunc ac ex molestie, auctor leo quis, tristique velit. Etiam
                tincidunt metus justo, sed aliquet quam mattis sed. Proin
                iaculis porttitor urna nec consectetur. Ut id turpis lacus. Duis
                ipsum risus, pretium a urna scelerisque, accumsan interdum
                dolor. Fusce rhoncus pellentesque tellus, non mattis ex rhoncus
                a. Etiam pulvinar vulputate erat tempus luctus. Nam molestie
                accumsan commodo. Aliquam odio dui, porttitor eu finibus in,
                feugiat eu felis. Donec massa ligula, venenatis eu nibh quis,
                faucibus interdum nulla. Donec congue arcu at ultricies
                vulputate. Nam rutrum gravida lobortis. Fusce varius lacus sed
                placerat efficitur. Suspendisse iaculis condimentum justo nec
                mollis. Proin lacus diam, porta quis nunc eu, tristique feugiat
                est. Phasellus eget vehicula nisi. Aliquam nisl quam, accumsan
                at faucibus id, mattis sed libero. Aliquam nec fringilla mi, ac
                lobortis libero. Quisque vel risus mi. Donec sodales lobortis
                elementum. Curabitur vulputate facilisis nibh, quis elementum
                erat malesuada elementum. Pellentesque bibendum pharetra mi ac
                venenatis. Suspendisse dictum, lectus ac vulputate aliquam,
                metus turpis ornare ante, ut bibendum est libero scelerisque
                enim. Aenean nec ipsum mauris. Phasellus lacinia, est a egestas
                auctor, tellus augue porttitor diam, at tempus odio magna id
                sem. Fusce orci arcu, porttitor vitae magna vitae, pellentesque
                sollicitudin nisi. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Quisque
                velit urna, finibus sed felis eget, auctor condimentum lacus.
                Suspendisse potenti. Quisque vel scelerisque nisi. Phasellus at
                imperdiet quam. Aliquam varius eleifend euismod. Fusce placerat
                id ligula fermentum viverra. Mauris lacinia justo tortor, at
                mollis augue rutrum vitae. Phasellus lacinia blandit aliquam.
                Morbi vel venenatis orci. Praesent neque ante, accumsan quis
                lobortis ut, porttitor vitae ex. Sed et lacinia massa. Vivamus
                id pharetra mi. Morbi accumsan, sapien in commodo gravida, lorem
                massa congue velit, ac pulvinar magna quam ac sapien. Nulla enim
                orci, ornare in tincidunt eleifend, aliquet eu neque. Proin
                mattis, lorem sit amet laoreet convallis, odio sapien aliquet
                magna, in iaculis augue dui quis enim. Maecenas vel nibh tempor
                ex tristique ultricies nec in leo. Morbi a ante ornare mi
                accumsan malesuada tincidunt eget mauris. Nunc ut sollicitudin
                libero. Sed elementum iaculis ornare. Curabitur molestie id
                justo et bibendum. Quisque consectetur, dui sit amet dictum
                pulvinar, velit nisi sollicitudin nisl, eu pulvinar lectus nibh
                eu ligula. Sed in molestie risus, non pharetra nulla. Sed
                lobortis nisi ac justo fermentum tempor. Phasellus ipsum arcu,
                rhoncus quis nulla quis, aliquet euismod tortor. Mauris
                consectetur, est vel placerat laoreet, neque ipsum finibus est,
                vel aliquam erat purus nec tortor. Nam in tellus libero. Aenean
                et tellus vel nulla faucibus rhoncus. Donec aliquam, ex
                condimentum tempor ullamcorper, ipsum sapien finibus justo, non
                auctor mi massa a sem. Nam tincidunt ligula id eros fringilla
                tincidunt. In hac habitasse platea dictumst. Nunc placerat
                mauris et diam posuere dignissim. Maecenas at bibendum purus.
                Cras euismod mauris non molestie molestie. Nulla sodales
                scelerisque elementum. Maecenas purus arcu, consectetur a tempus
                non, euismod in est. Nullam justo nisi, ultrices et mollis eu,
                porta vel odio. Curabitur suscipit enim elit, non convallis
                justo pharetra id. Morbi imperdiet lorem non hendrerit suscipit.
                Aenean finibus ac odio ac sagittis. Nam vitae luctus enim. Etiam
                dolor nisi, facilisis ac sagittis nec, maximus at libero.
                Suspendisse hendrerit euismod sem, vitae hendrerit metus
                efficitur id. Pellentesque consectetur iaculis ex eu facilisis.
                Maecenas pharetra est ut sem porttitor, a efficitur enim
                ullamcorper. Vivamus congue vulputate rhoncus. Donec bibendum
                vehicula finibus. Sed vitae ex nec lectus lacinia malesuada et
                sollicitudin ante. Phasellus consectetur eros in justo luctus, a
                pharetra justo fermentum. Praesent pretium tempor augue id
                efficitur. Maecenas vulputate nulla magna, at feugiat purus
                ultrices sit amet. Nam elementum ex volutpat feugiat fermentum.
                Vestibulum lobortis sapien vel quam facilisis euismod.
                Suspendisse a risus tempor, faucibus eros vel, rhoncus odio.
                Nulla tempor ante id tincidunt convallis. In sit amet ipsum nec
                mauris molestie maximus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Duis
                consequat maximus risus vel auctor. Morbi at sagittis nunc.
                Integer id ligula lectus. Aliquam erat volutpat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. In porttitor, neque
                id condimentum rutrum, neque massa sagittis mi, sed maximus
                ipsum nibh eget tellus. Sed velit neque, imperdiet vitae mauris
                a, interdum fringilla nibh. Aenean id sem ut ante porta mollis
                vel nec purus. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Integer vitae purus
                sit amet mi ultrices lobortis quis a ligula. Nunc congue feugiat
                efficitur. Nulla vitae euismod mauris, sit amet blandit orci.
                Cras porta ligula lorem, imperdiet ullamcorper justo sodales at.
                Etiam orci lacus, elementum nec egestas id, dignissim ac sapien.
                Nullam in ultricies ipsum, tincidunt lobortis felis. Nullam sit
                amet interdum odio, vel mollis ante. Vestibulum luctus auctor
                dui. Nulla pretium in lorem tempus hendrerit. Suspendisse vel
                eros cursus, venenatis dolor id, tempus odio. Morbi lectus
                nulla, molestie sodales urna nec, faucibus lacinia odio. Nulla
                id vehicula nisl, quis tempus eros. Phasellus quis facilisis
                velit. Duis at sodales magna, vitae convallis nunc. Sed et
                elementum metus. Vivamus auctor orci vel mauris efficitur
                imperdiet. Nunc laoreet tellus tellus, a blandit ligula ornare
                eu. Phasellus in erat scelerisque, euismod felis vel,
                pellentesque nunc. Integer libero massa, cursus et malesuada
                maximus, placerat ac ligula. Morbi scelerisque erat non sapien
                posuere, a dapibus risus vestibulum. Donec condimentum pulvinar
                ligula, sed volutpat lectus facilisis id. Quisque aliquet mauris
                in pharetra hendrerit. Duis placerat erat ipsum, et dictum orci
                accumsan non. Etiam posuere enim id mattis venenatis. Vestibulum
                sit amet enim purus. Morbi tincidunt finibus dolor non
                fermentum. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Pellentesque at nibh
                nisi. In luctus luctus turpis, quis molestie massa lacinia ut.
                Vestibulum tincidunt nulla imperdiet mollis condimentum. Ut
                efficitur est nec nunc maximus ultricies. Aenean placerat diam
                sit amet facilisis fringilla. Vivamus accumsan arcu ut metus
                ornare, vitae dapibus massa blandit. Fusce ut eros malesuada,
                feugiat urna iaculis, porttitor lorem. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Suspendisse potenti. Quisque
                vitae dolor non arcu vulputate vulputate. Mauris sit amet nisl
                quis odio pellentesque placerat sit amet quis magna.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aliquam erat volutpat. Ut nec
                nisi dignissim sapien scelerisque ultrices eu sed dui. Duis eu
                nisi purus. Aenean mollis dolor ac purus blandit ornare.
                Maecenas ex sapien, mattis sed enim ut, sagittis fringilla
                felis. Nam fermentum venenatis arcu id fringilla. Nullam nulla
                odio, blandit id porttitor eget, pulvinar et diam. Etiam
                sollicitudin nisi a libero hendrerit, in blandit magna semper.
                Aenean sit amet libero quis felis lobortis consequat. Nunc
                ornare vestibulum neque et efficitur. Duis congue enim sed
                tempus dapibus. Sed suscipit pellentesque congue. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nullam sed arcu
                finibus justo luctus euismod vel ac turpis. Praesent arcu ex,
                sollicitudin id pharetra a, congue accumsan sem. Nunc
                consectetur interdum sagittis. Quisque non ultrices enim. Nulla
                tempus, metus facilisis porttitor dapibus, elit nisi tincidunt
                metus, id varius massa ex quis justo. Morbi vel pulvinar eros.
                Aliquam erat volutpat. Vestibulum in aliquet metus. Fusce eget
                augue aliquet, porttitor odio porttitor, varius arcu. Donec quis
                laoreet est, non feugiat purus. Cras ipsum risus, condimentum a
                dignissim eget, porttitor quis felis. Curabitur a ipsum et leo
                scelerisque luctus at sed velit. Sed quis posuere lectus,
                interdum facilisis purus. Vestibulum efficitur, lectus ac
                tincidunt condimentum, magna ipsum maximus est, vehicula tempus
                erat erat sed est. Curabitur sit amet augue ullamcorper,
                facilisis ligula in, finibus erat. Etiam vel mi scelerisque,
                bibendum nisl in, pharetra elit. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Vestibulum placerat turpis id tincidunt faucibus. Nam vulputate
                placerat quam, non pulvinar nibh condimentum at. Ut sit amet
                libero eu sapien malesuada rhoncus in sit amet lectus. Vivamus
                dui nulla, pellentesque ac interdum in, condimentum eu lorem.
                Praesent auctor laoreet ante ac pretium. Phasellus nec sem
                placerat, ultricies ligula id, egestas metus. Donec mattis
                rutrum mauris vel dapibus. Integer sit amet tempus sem. Aliquam
                vitae molestie urna. Donec mi justo, aliquet at congue et,
                efficitur et enim. Pellentesque quis turpis neque. Morbi non dui
                posuere, porttitor enim a, viverra velit. In mauris ipsum,
                facilisis in lectus et, finibus maximus magna. Proin sem dolor,
                tincidunt ac lorem sed, venenatis mattis risus. Proin feugiat
                sollicitudin suscipit. In eleifend elit eget sapien elementum
                fermentum. Aenean consequat tellus cursus sapien vehicula
                sodales. Nulla convallis nunc eget diam gravida dapibus. Donec
                rhoncus urna ante, non euismod diam imperdiet quis. Mauris at
                eleifend eros. Nulla facilisi. Vivamus metus metus, bibendum in
                lectus in, rutrum ultrices neque. Nunc id luctus velit, nec
                gravida odio. Quisque tincidunt, eros et ultricies ultricies,
                sem ante pellentesque elit, id convallis nunc ante id velit.
                Cras congue, libero a aliquam sodales, eros est fermentum ex,
                quis mattis elit nunc et nibh. Quisque facilisis tellus feugiat,
                molestie sem quis, dictum urna. Donec accumsan mi eu lorem
                placerat hendrerit. Cras facilisis, lorem a efficitur sagittis,
                nulla libero varius purus, sed dictum sapien sem sit amet arcu.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nam turpis nibh, rhoncus ut aliquam quis,
                lobortis ut purus. Donec scelerisque, lectus eu molestie
                vulputate, metus nisi auctor metus, sit amet sodales lacus dolor
                vel orci. Proin mattis, nisi facilisis blandit auctor, ligula
                lacus fermentum lectus, sed blandit enim purus id ligula. Sed
                tincidunt dolor metus, pretium imperdiet justo aliquet eget.
                Etiam gravida tortor mollis, condimentum lacus nec, tincidunt
                libero. Ut nec urna vulputate, imperdiet sapien eget, luctus
                arcu. Proin molestie velit quis consequat pulvinar. Suspendisse
                mattis faucibus efficitur. Nulla in semper dolor. Pellentesque
                accumsan placerat nunc. Orci varius natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Duis at eros in
                quam porttitor pulvinar. Donec diam arcu, dignissim sit amet
                urna at, aliquet venenatis libero. Praesent mattis, libero vel
                semper tempus, urna orci porta augue, nec pellentesque nisl
                magna sit amet augue. Proin posuere arcu orci, eget ultricies
                nisl viverra sit amet. Praesent sed magna vitae lorem ornare
                semper eu sit amet massa. Vivamus justo odio, venenatis sed
                lorem nec, varius blandit est. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Curabitur in placerat enim. Quisque
                posuere gravida condimentum. Etiam non mi ultrices, molestie mi
                in, tempus ex. In non ultrices tellus. Vestibulum consectetur,
                massa a interdum feugiat, mauris felis tincidunt elit, sit amet
                rutrum lacus urna at sapien. Nam dictum nunc non felis faucibus
                ultricies. Cras vel quam blandit, consequat sapien sollicitudin,
                maximus est. Proin viverra risus sit amet dolor vehicula, in
                scelerisque eros facilisis. Nullam imperdiet eu ante ac mollis.
                Morbi eleifend lacus et malesuada pellentesque. Aenean
                condimentum euismod pharetra. Nunc vitae nunc pretium, congue
                massa tempor, imperdiet sapien. Nulla quis urna et massa
                volutpat ultrices. Pellentesque porttitor fringilla bibendum.
                Praesent et sem dictum, lacinia orci in, congue dolor. Aenean
                quis egestas nulla. Nunc in ante vitae justo ornare volutpat et
                quis risus. Vestibulum tincidunt, nisl at iaculis finibus,
                libero ipsum viverra odio, efficitur gravida ipsum risus sit
                amet magna. Vestibulum eget tincidunt sapien. Duis laoreet nisl
                id dictum posuere. Proin fringilla rhoncus felis, ac interdum
                purus. In sit amet justo vestibulum, maximus risus quis, porta
                lacus. Cras vulputate vestibulum nunc et mattis. Donec id
                pellentesque metus. Phasellus tempus ipsum diam, sagittis
                feugiat turpis condimentum quis. Donec a quam justo. Nam ornare
                nunc eu viverra aliquet. Ut ut risus quis sem consectetur
                dignissim quis non diam. Sed consequat lacinia purus, sit amet
                aliquam ipsum ornare et. Sed ac cursus ex. Aliquam vel fringilla
                magna. Ut porttitor, odio nec semper tempor, ex nisl dignissim
                quam, et laoreet nunc turpis quis mi. Mauris sit amet blandit
                justo, at venenatis ligula. Donec pellentesque in eros tristique
                iaculis. Phasellus malesuada sem et urna molestie, sit amet
                convallis ante lacinia. Integer gravida risus eget neque
                vehicula viverra. Vestibulum rutrum dictum ipsum, id suscipit
                neque blandit eget. Donec condimentum facilisis dui, sit amet
                congue risus dictum ut. Vestibulum ac tristique risus. Praesent
                maximus mauris varius metus sollicitudin pulvinar. In egestas
                efficitur ligula nec iaculis. Sed faucibus urna in odio
                fringilla mollis. Nunc egestas finibus luctus. Quisque sed velit
                pulvinar, dapibus dolor eu, vestibulum sapien. Vivamus consequat
                ac lorem ut congue. Morbi ultricies enim sit amet ligula
                vehicula posuere. Pellentesque ut dolor dui. Sed erat risus,
                volutpat a iaculis vel, elementum at eros. Cras nunc arcu,
                placerat ac dolor vitae, varius porttitor leo. Aenean lacinia,
                turpis eu blandit pretium, nisl nunc mollis sapien, id dictum
                magna eros vitae nunc. Sed et velit a mi imperdiet tempus quis
                in ante. Pellentesque tempor ullamcorper nunc, eget ornare elit
                fermentum id. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Cras in ante pharetra,
                imperdiet diam sit amet, facilisis justo. Nullam sit amet
                efficitur magna. Suspendisse tortor orci, convallis eget cursus
                vitae, finibus sit amet ex. Aliquam sodales aliquam venenatis.
                Aenean id eleifend nunc. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Quisque
                a tincidunt lorem. Maecenas laoreet lectus sed vestibulum
                feugiat. Donec vitae blandit arcu, sed ultricies ex. Sed et orci
                eu urna congue lobortis. Nulla facilisi. Praesent est ligula,
                consectetur sit amet dolor id, hendrerit hendrerit neque. Proin
                mi leo, posuere a diam non, aliquam consequat urna. Sed dapibus
                molestie augue. Ut diam risus, lacinia a dapibus id, dignissim
                egestas massa. Nam viverra ac purus eu sollicitudin. Donec dolor
                augue, fringilla aliquam euismod quis, pretium eget nunc. Morbi
                non ligula eget sapien cursus sagittis. Sed id nulla sed nulla
                varius semper sed aliquam dui. Morbi condimentum est in euismod
                maximus. Vestibulum pharetra facilisis massa ut sollicitudin.
                Sed nec tincidunt quam. Praesent eu nulla quis mauris porttitor
                varius eget sed felis. Pellentesque condimentum ultricies urna,
                ac porta augue aliquet vitae. Sed faucibus cursus ornare.
                Praesent fringilla sollicitudin mi, feugiat aliquam arcu
                imperdiet at. Curabitur euismod id leo ut vestibulum. Fusce
                vitae nunc non mi pellentesque aliquet. Fusce eu euismod tellus.
                Nulla malesuada volutpat ligula, et tempor leo. Proin in
                consequat lectus. Aliquam quis gravida orci, quis dictum mauris.
                Fusce consectetur erat a felis elementum, non hendrerit justo
                blandit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Morbi ex elit, posuere
                at volutpat et, gravida nec libero. Ut ut lobortis nulla.
                Vestibulum arcu eros, scelerisque convallis libero id, semper
                iaculis nibh. Vestibulum luctus facilisis ipsum, sed faucibus
                nibh vulputate a. Mauris lobortis nulla lorem, eget vestibulum
                lacus eleifend sit amet. Mauris tempor porta diam, posuere
                vestibulum libero ornare a. Sed pulvinar vitae diam non porta.
                Praesent vehicula placerat tellus et pellentesque. Mauris sit
                amet fringilla sem. Curabitur congue dolor ac risus pulvinar, et
                pretium nisi aliquam. Vivamus dictum arcu sit amet dui
                consectetur, id lobortis mi hendrerit. Nulla lobortis nisl
                euismod vehicula faucibus. Donec iaculis, leo vitae ornare
                imperdiet, tortor nunc hendrerit massa, vel laoreet neque velit
                in mauris. Nulla tincidunt efficitur congue. Integer imperdiet
                velit sit amet tortor suscipit, a venenatis leo vestibulum. In
                faucibus feugiat turpis eget condimentum. Donec sed facilisis
                odio. Nam semper non sapien nec semper. Suspendisse laoreet a
                purus et lacinia. Quisque pellentesque fringilla erat, quis
                laoreet ipsum vestibulum eget. Aliquam gravida felis nec
                pulvinar cursus. Duis sit amet mi eget enim imperdiet laoreet.
                Fusce eget lorem nunc. In elementum lectus eget augue sodales
                blandit vel non felis. Praesent rhoncus ex ac augue varius
                dapibus. Donec tincidunt semper diam. Quisque bibendum turpis
                eget libero volutpat, quis gravida orci facilisis. Proin
                convallis neque eros, id porttitor felis tincidunt id. Mauris
                tempus nibh vel arcu commodo varius. Pellentesque consequat,
                tortor sit amet bibendum pharetra, dui elit gravida sapien, sit
                amet aliquam enim nisl vitae mi. Donec imperdiet neque sit amet
                risus luctus feugiat. Nulla congue magna at placerat
                pellentesque. Vestibulum metus sapien, efficitur ut condimentum
                nec, accumsan ut velit. Phasellus elementum diam sed diam
                facilisis, et interdum urna facilisis. Duis id tincidunt justo.
                Aliquam vel magna eget libero gravida suscipit ac a sem. Mauris
                condimentum eleifend accumsan. Curabitur sapien augue, cursus
                eget dictum nec, egestas porttitor turpis. Donec turpis mauris,
                malesuada ut velit eget, mattis blandit dolor. Nullam justo
                elit, malesuada et ex eget, suscipit sagittis arcu. Proin
                accumsan aliquet magna eu porta. Mauris vestibulum posuere
                sagittis. Pellentesque aliquam volutpat ipsum nec placerat.
                Quisque venenatis mauris at velit volutpat scelerisque. Etiam
                sollicitudin diam metus, ac sagittis purus dapibus at. Donec
                pellentesque ante a eros sollicitudin luctus. Morbi mollis lacus
                id lacus vehicula ullamcorper. Curabitur porttitor dui eu
                gravida iaculis. Fusce efficitur ultrices dui. Suspendisse
                mollis malesuada blandit. Nunc eu purus est. Nulla interdum
                tempor ultricies. Vivamus euismod neque vitae blandit faucibus.
                Curabitur blandit tempor nunc, eu lobortis tellus rutrum eu.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Cras lorem nunc, blandit at dui a, semper
                ultricies eros. Ut eu enim feugiat, tincidunt enim vel,
                ultricies nibh. Donec eget aliquam velit. Etiam ligula metus,
                blandit ac tortor a, tristique viverra massa. In sit amet nisl
                pharetra, fermentum felis eu, mollis felis. Morbi volutpat
                rhoncus maximus. Nam a lobortis elit. Suspendisse potenti.
                Nullam tincidunt ullamcorper erat et semper. Donec mollis enim
                eget turpis iaculis euismod. Proin maximus volutpat massa, in
                tincidunt magna consectetur non. Morbi a consectetur augue.
                Nulla facilisi. Integer dapibus tempus ipsum nec ultrices.
                Vivamus sagittis, mauris in consectetur molestie, elit augue
                hendrerit risus, nec mollis nibh ligula a justo. Donec venenatis
                eleifend felis tincidunt congue. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Nulla
                non condimentum sapien. Sed fermentum tortor eget vestibulum
                mattis. Cras feugiat consectetur mauris ac congue. Nam aliquam
                consequat vehicula. Etiam mattis dignissim aliquam. Nullam quis
                suscipit dolor, elementum laoreet est. Maecenas placerat
                vestibulum magna ac ullamcorper. Integer id lobortis ex. Vivamus
                id molestie erat. Pellentesque pellentesque vestibulum dolor, eu
                sodales metus sollicitudin ac. Nam eu orci pulvinar, consectetur
                neque vitae, eleifend turpis. Fusce consectetur ligula sed porta
                interdum. Mauris eget quam quam. Nam feugiat nisi quis ante
                ornare, vitae porta sapien congue. Nam ornare ante nec pharetra
                dapibus. In convallis a diam quis feugiat. Cras tortor mi,
                semper ac quam quis, pharetra malesuada leo. Mauris ut lacus
                nunc. Aliquam bibendum suscipit orci eget scelerisque. Phasellus
                vestibulum porttitor dolor et ultrices. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Ut id ligula eget orci dictum feugiat. Integer enim ante,
                feugiat vel tincidunt quis, condimentum ut risus. Donec quis
                semper elit. Nunc sollicitudin hendrerit mattis. Quisque
                efficitur eu odio quis vulputate. Aenean elementum neque eros,
                in volutpat enim molestie eu. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Phasellus euismod ornare leo, in placerat orci luctus at. Sed a
                varius velit. Curabitur scelerisque ullamcorper feugiat.
                Phasellus tortor est, consectetur eu justo pellentesque,
                accumsan dignissim velit. Mauris a mauris placerat, viverra mi
                eget, fermentum augue. Aenean sagittis aliquam metus quis
                egestas. Nam condimentum lobortis ex, nec eleifend mi porta eu.
                Ut interdum venenatis sem, at ornare purus tempor ut. Nullam
                congue lectus id efficitur cursus. Mauris sit amet imperdiet
                diam. Sed varius ultricies ex vel viverra. Ut quis quam risus.
                Mauris egestas erat ut laoreet consequat. Nullam mauris nisi,
                vestibulum nec odio a, efficitur varius massa. Donec iaculis
                eget urna vestibulum dignissim. Donec efficitur porta turpis,
                nec tincidunt nibh dapibus sed. Morbi a velit condimentum eros
                sollicitudin vehicula id vel risus. Etiam metus diam, porttitor
                at ultricies sed, molestie non velit. Nunc tempus orci et felis
                lobortis tempus. Morbi et pharetra tellus. In id mauris purus.
                Ut vel interdum enim. Vestibulum tincidunt quis felis et rutrum.
                Integer vehicula lorem libero. Aenean ornare consectetur lorem
                in blandit. Curabitur a neque vel erat sodales rutrum ac vel
                dui. Phasellus ultricies eget ligula sit amet iaculis. Aliquam
                erat volutpat. Nullam efficitur diam eget purus aliquet, quis
                tempus ipsum pulvinar. Duis vulputate orci ut finibus volutpat.
                Aliquam vitae arcu justo. Donec eget lectus venenatis, gravida
                neque non, faucibus justo. Nullam ullamcorper erat sed risus
                faucibus, vitae venenatis nibh egestas. Duis id sollicitudin
                tortor. In eget pharetra erat. Cras cursus finibus lacus, non
                rutrum sapien aliquam sed. Aliquam blandit nisl vitae justo
                consequat, eget scelerisque nisi commodo. Mauris at lacinia dui.
                Maecenas erat mauris, auctor eu est vel, aliquam convallis
                mauris. Fusce arcu turpis, feugiat at luctus ut, consequat sed
                eros. Fusce fringilla gravida finibus. Suspendisse pretium
                sagittis ultrices. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris nisl velit, semper et turpis eu,
                vehicula vestibulum turpis. Nullam commodo dapibus lectus eget
                faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc ut libero id enim tempor suscipit non a sem.
                Phasellus sagittis erat eget libero blandit, eu porta enim
                bibendum. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec sed ipsum vel tortor
                congue mattis ac in augue. Cras ac mi porta, fermentum ante vel,
                sagittis diam. Nulla aliquet pretium tortor, quis dignissim
                metus placerat et. Duis pharetra libero sit amet semper
                scelerisque. Mauris tempor et dui nec porta. Curabitur congue mi
                in libero tincidunt luctus in nec quam. Vivamus cursus tellus
                accumsan, iaculis nulla id, euismod ante. Vestibulum tempus urna
                a sollicitudin tincidunt. Ut eu tellus porta, consectetur turpis
                id, mattis tortor. Proin sodales tortor nec placerat fringilla.
                Integer at sollicitudin ipsum. Cras varius varius ligula, sed
                malesuada quam luctus in. Praesent ac pulvinar urna. Cras
                consectetur risus sapien. Sed mattis, felis sit amet pharetra
                ornare, enim felis consequat metus, posuere pharetra nunc dui
                mattis ligula. Maecenas a sapien quis urna suscipit auctor in et
                ex. Donec et varius urna. In tincidunt pulvinar felis, a
                pulvinar ex aliquet sed. Pellentesque quam diam, vulputate id
                volutpat non, scelerisque sed nisl. Proin justo nibh, finibus et
                ullamcorper in, venenatis non ligula. Nunc sagittis nisi vitae
                velit scelerisque pellentesque. Maecenas pretium dolor sit amet
                magna convallis, sit amet pulvinar purus euismod. Sed id erat
                consequat, malesuada tellus eu, laoreet risus. Suspendisse eget
                quam sed felis accumsan dapibus. Aenean commodo dignissim ipsum
                eu varius. Donec vitae malesuada justo. Aliquam et laoreet dui,
                ut iaculis massa. Suspendisse efficitur euismod justo, sed
                dignissim dolor rutrum quis. Quisque pretium at justo ac
                tristique. Nullam mattis lorem sit amet enim ullamcorper, eget
                placerat orci lacinia. Etiam mollis nulla vel nisl venenatis
                hendrerit. Vestibulum enim tortor, ultricies quis volutpat
                blandit, interdum ut nibh. Curabitur et tellus nec dolor blandit
                imperdiet. Vivamus ac efficitur elit, eget luctus enim. Etiam
                ornare arcu et neque eleifend laoreet ut at metus. Fusce vitae
                turpis eu enim ullamcorper aliquet a vel risus. Nullam interdum
                ac purus ac cursus. Fusce ullamcorper enim urna, sagittis
                feugiat urna malesuada ut. Aliquam ut dapibus arcu. Quisque in
                eros diam. Suspendisse bibendum ullamcorper eros a efficitur.
                Praesent quis viverra lorem. Vivamus vel facilisis odio.
                Vestibulum fringilla pulvinar hendrerit. Aenean vitae faucibus
                sapien. Proin nec arcu euismod, tincidunt urna et, feugiat erat.
                Integer vel lectus ipsum. Aenean vel velit dolor. Phasellus
                facilisis nisi a mollis facilisis. In nec tristique mi, at
                dignissim lectus. Praesent ex nisi, condimentum at ligula eget,
                vestibulum interdum diam. Mauris ultrices erat gravida purus
                blandit efficitur. Nullam faucibus, sapien at tempor tristique,
                lacus ex scelerisque neque, at rhoncus enim arcu at lorem. Ut
                nec tempus urna. Nulla tincidunt blandit neque, ut hendrerit
                nulla pretium ut. Quisque maximus mauris et nisi lobortis, id
                accumsan nibh ornare. Fusce auctor varius ligula. Donec
                tristique neque porttitor justo tempor, nec dignissim tellus
                pellentesque. Nullam est lectus, pharetra quis tristique
                gravida, mollis non eros.
              </p>
            </div>
          </section>
          <Footer />
        </div>
      </div>

      <Guides />
    </main>
  );
};
