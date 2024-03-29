/* eslint-disable no-useless-escape */
import { isPhone } from '../style/utils';

const adjustForPhone = (samples) => {
  const shouldAdjust = isPhone()
  return Object.keys(samples).reduce((acc, key) => {
    if (shouldAdjust) {
      const sample = samples[key]
      const { fontSize, horPadding, verPadding } = sample
      acc[key] = Object.assign({}, sample, {
        fontSize: fontSize ? fontSize / 1.5 : undefined,
        horPadding: horPadding ? horPadding / 1.5 : undefined,
        verPadding: verPadding ? verPadding / 1.5 : undefined,
      })
      return acc
    }
    acc[key] = samples[key]
    return acc
  }, {})
}


export const genericLogoText = `                                                                  Hello World');co                                                                   
                                                       o World');console.log('Hello World');c                                                        
                                                 ;console.log('Hello World');console.log('Hello Worl                                                 
                                            og('Hello World');console.log('Hello World');console.log('Hel                                            
                                        orld');console.log('Hello World');console.log('Hello World');console.                                        
                                    ole.log('Hello World');console.log('Hello World');console.log('Hello World')                                     
                                 lo World');console.log('Hello World');console.log('Hello World');console.log('Hell                                  
                              onsole.log('Hello World');console.log('Hello World');console.log('Hello World');console.                               
                           Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World')                            
                         ;console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hel                          
                       'Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console                       
                     );console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World                     
                   ('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('                    
                 ');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');con                  
               g('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello W                
              ');console.log('      World')    sole.lo           rld');cons    log('Hell    rld')            ('Hello World');console.l               
            g('Hello World');co    e.log('    o Worl               ('Hello     d');conso    og('H              onsole.log('Hello World')             
           ');console.log('Hello     d');    ole.l      llo Wor      onsole    ('Hello W    ');co    e.log(     o World');console.log('He            
          ('Hello World');console     'H     Worl     onsole.log(     o Wor    ;console.    'Hell    rld');c    le.log('Hello World');cons           
         );console.log('Hello Worl         le.log    llo World');     le.lo    ello Worl    conso    og('He     orld');console.log('Hello W          
        'Hello World');console.log(       World')    sole.log('He     orld'    nsole.log    llo W              .log('Hello World');console.lo        
       ;console.log('Hello World');co    e.log('H     World');con     log('    o World')    sole.           World');console.log('Hello World')       
      Hello World');console.log('Hel     rld');con     log('Hell     ld');c    le.log('      Worl    cons    log('Hello World');console.log('He      
     console.log('Hello World');cons     og('Hello       );con      og('Hel       d')      le.log    llo W     );console.log('Hello World');con      
    ello World');console.log('Hello      ');console.              ld');consol             World')    sole.l     ello World');console.log('Hello      
   onsole.log('Hello World');console.    'Hello World');       .log('Hello World      sole.log('H     World'     sole.log('Hello World');console.    
   lo World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello Worl    
  sole.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log(   
   World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');c  
 le.log('Hello World');console.lo    ello World');con           ello World');c            Hello Worl           .log('Hello World');console.log('Hel  
 orld');console.log('Hello World'    nsole.log('He                ole.log('               onsole.l                );console.log('Hello World');cons  
.log('Hello World');console.log('    o World');co     .log('He     orld');      e.log('Hello Worl     onsole.l     ello World');console.log('Hello W 
ld');console.log('Hello World');c    le.log('Hel     rld');cons     og('H     World');console.lo     llo World'     sole.log('Hello World');console. 
g('Hello World');console.log('Hel    orld');con     log('Hello W     );co    e.log('Hello World     nsole.log('H     World');console.log('Hello Worl 
);console.log('Hello World');cons    log('Hello     d');console.     Hell    rld');        log(     o World');co     .log('Hello World');console.log(
Hello World');console.log('Hello     d');console    ('Hello Worl    conso    og('He        d');     le.log('Hell    rld');console.log('Hello World');
onsole.log('Hello World');console    ('Hello Wor     console.lo     llo W      ;console    ('Hel     rld');cons     og('Hello World');console.log('He
lo World');console.log('Hello Wor            .log        Wor       nsole.lo       o Wo     ;conso       'Hel       d');console.log('Hello World');con
ole.log('Hello World');console.lo            ld');c              llo World');              ello Wor              og('Hello World');console.log('Hello
World');console.log('Hello World'            g('Hello W      ;console.log('Hello       );console.log('H      orld');console.log('Hello World');consol
.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello Wo
ld');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console. 
g('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello Worl 
);console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log 
 ello World');console.log      o World');co      log('He                 le.log(                onsole.log                 onsole.log('Hello World') 
 nsole.log('Hello World')      le.log('Hell      d');con                 orld');                   World')                 lo World');console.log('  
   World');console.log('H      orld');conso      ('Hello                 log('He      rld')        .log('H                 ole.log('Hello World');c  
  e.log('Hello World');co      log('Hello W      ;consol      'Hello World');con      og('Hel       d');co      log('Hello World');console.log('He   
   ld');console.log('Hell      d');console.      ello Wo      console.log('Hello      ');conso      ('Hell      d');console.log('Hello World');con   
   g('Hello World');conso                        nsole.l                );consol      'Hello       );conso                rld');console.log('Hell    
    ;console.log('Hello W                        o World                Hello Wo      cons         Hello W                og('Hello World');cons     
     llo World');console.                        le.log(                onsole.l                 ;console.                ');console.log('Hello      
      ole.log('Hello Worl      nsole.log('H      orld');      e.log('Hello World               'Hello Worl      nsole.log('Hello World');consol      
       orld');console.log      o World');co      log('He      rld');console.log(       Wor      onsole.log      o World');console.log('Hello W       
        og('Hello World')      le.log('Hell      d');con      og('Hello World');      e.log      o World')      le.log('Hello World');console        
         );console.log('H      orld');conso      ('Hello                 log('He      rld');       .log('H                 ole.log('Hello Wo         
          ello World');co      log('Hello W      ;consol                 d');con      og('Hel       d');co                 World');console           
           sole.log('Hell      d');console.      ello Wo                 ('Hello      ');consol      'Hell                 .log('Hello Wo            
            World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.             
              og('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello Wor              
               );console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.                
                 llo World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello Wo                  
                   le.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.                   
                     ld');console.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello Wo                     
                       'Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello World');console                       
                         nsole.log('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hello                           
                           World');console.log('Hello World');console.log('Hello World');console.log('Hello World');conso                            
                              g('Hello World');console.log('Hello World');console.log('Hello World');console.log('Hell                               
                                 onsole.log('Hello World');console.log('Hello World');console.log('Hello World');con                                 
                                    World');console.log('Hello World');console.log('Hello World');console.log('H                                     
                                       g('Hello World');console.log('Hello World');console.log('Hello World')                                        
                                            sole.log('Hello World');console.log('Hello World');console.lo                                            
                                                ld');console.log('Hello World');console.log('Hello W                                                 
                                                       o World');console.log('Hello World');c                                                        
                                                                 llo World');consol                                                                  `

const samples = adjustForPhone({
  '4': {
    value: `
class Graph:
  def __init__(self):
    self.nodes = set()
    self.edges = defaultdict(list)
    self.distances = {}

  def add_node(self, value):
    self.nodes.add(value)

  def add_edge(self, from_node, to_node, distance):
    self.edges[from_node].append(to_node)
    self.edges[to_node].append(from_node)
    self.distances[(from_node, to_node)] = distance


def dijsktra(graph, initial):
  visited = {initial: 0}
  path = {}

  nodes = set(graph.nodes)

  while nodes: 
    min_node = None
    for node in nodes:
      if node in visited:
        if min_node is None:
          min_node = node
        elif visited[node] < visited[min_node]:
          min_node = node

    if min_node is None:
      break

    nodes.remove(min_node)
    current_weight = visited[min_node]

    for edge in graph.edges[min_node]:
      weight = current_weight + graph.distance[(min_node, edge)]
      if edge not in visited or weight < visited[edge]:
        visited[edge] = weight
        path[edge] = min_node

  return visited, path
    `,
    mode: 'solarized_dark',
    language: 'python',
    fontSize: 10,
    showLineNumbers: true,
    size: '12x16',
    shirtColor: 'asphalt',
  },
  '2': {
    value: `\n    \n    \n    \n    \n    \n    \n    public class Me {\n        private Boolean alive = true;\n        public void run() {\n            while (this.alive) {\n                this.love(new You());\n            }\n        }\n    }\n    `,
    showLineNumbers: false,
    mode: 'eclipse',
    fontSize: 18,
    language: 'java',
    size: '10x10',
    shirtColor: 'white',
  },
  '1': {
    value: `\n\n\n\n\n                                                                                                                                                                     \n                                                                         _cod                                                                                        \n                                                                       Promise =                                                                                     \n                                                                    st img = requi                                                                                   \n                                                                   options, isTest,                                                                                  \n                                                                en.id, }) .then((charg                                                                               \n                                                              n((data) => img.takeScreen                                                                             \n                                                            , 'codenail-order-previews', {                                                                           \n                                                          ddress_city, ship ing_address_stat                                                                         \n                                                         shipping_address     , state_code: sh                                                                       \n                                                      n webhook }, isTe          } module.export                                                                     \n                                                    js'); const pfOrd             '../lib/printful                                                                   \n                                                  ) } const create                  , addresses, pri                                                                 \n                                                unt: price, curre                     on: description,                                                               \n                                              harge, justDownlo                         but why not } }                                                              \n                                            Path, 'codenail-o                            ad(fileName, f                                                              \n                                          (() => { const {                             ess_line1, shipp                                                              \n                                        ns, { name: shipp                            _address_line1,                                                                 \n                                      email: token.emai                             shipment confir                                                                  \n                                    namodb.js').clien                            quire('../lib/st                                                                    \n                                  ent.getAsync({ Ta                            Key: { token: id                                                                      \n                                t } = options con                            hargeFn(isTest)(                                                                        \n                              : 'codenail-order                            email: token.ema                                                                          \n                            { filePath, fileN                            upload(fileName,                                                                            \n                          oad) { return cha                             chargeAndUpload                                                                              \n                        , shipping_addres                            fOrder(orderId,                                                                                 \n                      y_code: shipping_                            hipping_address_                                                                                  \n                     Promise = requir                            t = require('../                                                                                    \n                  st img = require(                            id) => { return                                                                                       \n                 options, isTest,                             const { width,                                                                                         \n              en.id, }) .then((                            .putAsync({ Tabl                                                                                          \n            n((data) => img.t                            ns, orderId)) .t                                                                                            \n          , 'codenail-order                            }), ])) if (just                                                                                              \n         dress_city, ship                            _address_country                                                                                                \n         ipping_address                            address_state, c                                                                                                  \n         hook }, isTe                             { get, create }                                                                                                    \n         onst pfOrde                           l/api.js').order                                                                                                      \n          create = (                         , price, descrip                                                                                                        \n          currency:                        cription, source                                                                                                          \n         wnload, opt                      why not } }) })                                                                                                            \n         -order-scre                   ad(fileName, fil                                                                                                              \n         shipping_na                 ess_line1, shipp                                                                                                                \n         g_name, add               _address_line1,                                                                                                                   \n         / important for printful shipment confir                                                                                                                    \n         st createChargeFn = require('../lib/st                                                                                                                      \n          'codenail-orders', Key: { token: id                                                                                                                        \n         ndUpload = createChargeFn(isTest)(                                                                                                                          \n          oken: orderId, email: token.ema                                                                                                                            \n            .all([ img.upload(fileName                                                                                                                               \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n          )) if (justDownload) { return chargeAndUpload } else { return chargeAndUpload.then(() => { const { shipping_                                               \n         ss_country_code, shipping_address_zip } = addresses return pfOrder(orderId, options, { name: shipping_name, add                                             \n         state, country_code: shipping_address_country_code, zip: shipping_address_zip, email: token.email, // important                                             \n         eate }const Promise = require('bluebird'); const dbClient = require('../db/dynamodb.js').client; const createCh                                             \n          der; const img = require('./image.js'); const get = (id) => { return dbClient.getAsync({ TableName: 'codenai                                               \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     `,
    size: '12x12',
    fontSize: 5.9,
    showLineNumbers: false,
    shirtColor: 'black',
  },
  '6': {
    value:`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                      c re                                                                  e:o t, r                                                            \n                                                 r fs: l }, ,20: t                                                     i t = a A fs :o v                                                        \n                                             e e = s.r id 0= 0= i \"\" ,i                                         de ( t, . n = r a t 0== \"\"                                                      \n                                            : ) , f : == \"\" rn r r fs n def                                   ar id 0 a e :o( de il ) id = \"\"                                                   \n                                          \"\" ,i A f anv il pol i p \"), = f u u                            , P : ;v y v =\"\" :l f nv s at t \"),                                                   \n                                         use ar ne             su anv is a :o( c                       n 2 o a se t :o {              : d d d 0                                                 \n                                         n 0 h\" r                    c e h\" e in ) n                at i \" de = ar c                   fs ip c r                                                \n                                       ar i ( r=t                       o( at {i i an a            , t v t yl \" a                        id = , \"                                               \n                                       de pse:                              c= : su anv 8       \"\" ,i \"), nul                            o( ), = a                                              \n                                      ne st p !                               d id i l f=\"\"  , l v 0 v E i                               20 {if r                                               \n                                      urn n r i                                  fs pat ); t :o( ) e =t(                                 e ( :o .                                               \n                                      t n 20 c                                     \" , x i i : r f e h                                     ) c=n t                                              \n                                      c= ,i ur                                        c re ar \"\" ,i                                       = c=n 0 P                                             \n                                      \"\" ,i t                                        a n l ,map:l,                                        e ar n de                                             \n                                     ), , r 20                                      , . ne c= e h a s                                     , . :o( c                                             \n                                      20: t c=                                     ar ne ur lli i t =                                     ) d a t s                                             \n                                      0= i \"\" ,                                  efs i n de   t, . n = r                                  == ef .p                                              \n                                      n r r fs                                 ur ), t ar      a e :o( de                                 st , i r                                              \n                                      l i p \"),                              }, {i , P :        =\"\" :l f nv                               d = r de                                              \n                                      0 su anv                             ar urn 2 o a            o( at {i i                            { va def                                               \n                                      , i c s c                            h at i \" d               :o t, h\"),                           p is.re .                                              \n                                        r a a t                          t( , t v t                   { n \" pa =                         [ ) r v s                                              \n                                         r ar ,                  8), t = \"\" ,i \"), nul fs ;v \" t d ,! l n t \"p , :o( ),                  8 t r r=                                               \n                                         st , u a      d id i l f=\"\" ), l v 0 v E i ,20: u u {i is : an ar ; ), r 20 {if r ( n =nu       = c= fs                                                \n                                        e h ) \" \"), y v defs pat ); t :o( ) e =t( n .p st ca i \" } , i , de : \"u se ( :o . i ne t r a t 0== d re                                                \n                                       i o d i :[ i t, . ne \" , x i i : r f e h \"), ,i !0 n t m m ap t { d t( {\" st ) c=n t nul f \"pat : r l id 0                                               \n                               ul fs at : ;v ar ; ro de :o( is c re ar \"\" ,i                                ), r e = c=n 0 Pat t n u i u. } , l is 0: ur                                        \n                           fs o c= Pa s r ar = {e c 0= )        n l ,map:l,                                   v \"use ar          n l , : e:o( i is : ) d 0==                                    \n                      0 . i ips i s .re \"d 0 pP (\"d            . ne c= e                                       :o t, . :o            , 0== \"\" , v turn r = , \"ell                               \n                   t c= e n n a t Ea ),    = s.r a t           ne ur lli                                         u ) d a t           a h v c ,   o l is o( i t( p o(                            \n                = i \"\" ,i An i , de         ( a t Ea          i n de (                                           t == ef .p         c ) i is          f re id 0 r esu an                        \n              rn r r fs n def               =nu } c \"p      , t ar id                                              st , i r e      r n r c=n              \"), = n r r f p a                     \n           l pol i p \"),                      f su st       , P : ;v                 s at t \"), y v                  = r defs     Pa ne :o(                     s t } , l is                    \n         n r c 0 su an                         == u ar   n 2 o a se               {i is : d d d 0== s                a def e h     ) e : t,                       su Pat =n r ar                \n        ,! ) l , i                            a t e h at i \" de =               t, h\"), efs ip c r=t 0 \"e             .re .r : ) , f :l,ma                           t c= , \" u a               \n      \"\" , s.res                                i t( , t v t yl \"              { n \" pa =t id = , \"d ne h\"              v st , u anv Pa ,                              at {i , r s              \n     n =nul :o(                                 = \"\" ,i \"), nul              ! l n t \"p , :o( ), = a t se )             r=  de : ) i t ,                                  = s de =t             \n    a t r d e                                    l v 0 v E i ,2               an ar ; ), r 20 {if r ( n =nul              c a t : \"de \"                                     \"), = o(            \n    , h\" a n                                       ) e =t( n .              , i , de : \"u se ( :o . i ne t r              a ) n t at {i                                     ap h\") \"\"           \n   e s t( }                                        f e h \"),                p t { d t( {\" st ) c=n t nul f \"p              a t se e t                                        ={e d =            \n   at =nul f                                       ,i An r s                nul : 20 ), r e = c=n 0 Pat t n u               0: ur \" in                                      l l h\") i           \n    fs o c= P                                     l, def h\") {              r c f=\"\" 0 v \"use ar n de e a n               s : ) d 0== r                                    e: ( sca i           \n     ips i s .                                    h a se:o t, r              ), c= .p r :o t, . :o( c l Pat              v turn r = , \"e                                   f 0 elli             \n     n a t Ea ),                                i i t = a A fs :              t u.ca in f u ) d a t se , {              i o l is o( i t(                                 : ar ={e e             \n        , de : :[                               t, . n = r a t 0=               d re ar \" t == ef .p st d               i ), c f re id 0 r                             == t, i : )              \n         .re \"de , x                           0 a e :o( de il ) i               ar c=n 0 a st , i r e p              e n c u .   h\"), = n                          , a i o( \"\" ,               \n         ll h\"), in ),                        y v =\"\" :    nv s at t               s de =t id = r defs               a :o( a n     :o in s                       : ;v y v t use                 \n            , r 20 ), r ==                   t :o {i o     {i is : d                   e t { va d                    . u. c=        ip ( c s                  , . ne , r ip n                   \n              n i t(8) a t e h              r c e =t(       h\"), efs i                                              e a efs         n = f r a            anv is Pa 0 == t a                     \n                 a t a : i t( , t            =\"\" ca e         pa =t id                                           , r e = c          s t u u :         , r s E {\" s u t v                        \n                   8), t = \"\" ,i \"), nul    ;v \" t d          \"p , :o( )                                        , {i , Pat           s , ar ={ \"), = s de =t id = } u                           \n                       ), l v 0 v E i ,20: u u {i i             , r 20 {i                                      \"\" ,i \"),               re st de m ar \"), = o(\"de                                \n                            ) e =t( n .p st ca i \" } , i ,       u se ( :o                                    {i c re id     s i s: d , a t Ea ap:l,map h\") \"                                   \n                                h \"), ,i !0 n t m m ap t { d t( {\" st ) c=n                                  t { u. t re o ) d 0 == t \" ul f def t ar ={                                        \n                                      t E {\" st y xt=nul : 20 ), r e = c=n 0 Pat t n u i u. } , l is 0: ur \" in ) , (8), x st r de ,! l r e == t r                                              \n                                        u s.r = =ne ur c f=\"\" 0 v \"use ar n de e a n l , : e:o( i is : ) d 0== r 0 \" t r se:o( r d e \"pa 0 Pat )                                                \n                                         c= \"\" t     8), c= .p r :o t, . :o( c l Pat { , 0== \"\" , v turn r = , \"ell i ef r r=t(8 n        {i c f                                                \n                                        :o v f=\"                   u ) d a t se , { u.ca h v c , i o l is o( i t( p o                    r ; ro l                                               \n                                        0== \"\"                           f .p st d f                  c f re id                           ! r e ==                                              \n                                      l ) id =                            i r e pse:                 u . v h\")                           s: ), a i                                              \n                                       s at t \"                             efs , 0 Pa            ( a n i i :                             : ;v y v                                              \n                                       is : d d                              e h s:o ) e        u. c= fs\" )                                ne , r i                                             \n                                      \"), efs i                                : ) , f :l,     a efs :o t,                                a 0 == t                                              \n                                       pa =t i                                   u anv Pa , r e = c t Ea                                  s u t va                                              \n                                     t \"p , :o                                     ) i t , {i , Pat )                                      } ur o n                                             \n                                      ; ), r 2                                      \"de \"\" ,i \"), t l                                     \"), = n u                                             \n                                     e : \"u se                                         {i c re id 0                                       . i se st                                             \n                                      t( {\" st                                        t { u. t re o                                        : , is c                                             \n                                       ), r e =                                     \" in ) , (8), x st                                     r e h\" \"                                             \n                                       0 v \"use                                 ) d 0== r 0 \" t r se:o( r                                  c re 8)                                              \n                                      p r :o t,                               urn r = , \"el    ef r r=t(8 n                              s: l }, ,                                              \n                                       in f u )                             o l is o( i t       c= nul fs d :                            .r id 0=                                               \n                                        r \" t ==                        = i ), c f re i           nv is Pa s.re i                        : == \"\"                                                \n                                        n 0 a st ,                  c=n e n c u . v                  an t( t ),defs:                   f anv il                                                 \n                                          =t id = r           a ne :o( a :o( a n                        0 ( :[ ) r : ;v y            ne t urn r                                                 \n                                           t { va def e h s:o ) e : t, . u. c=                              :o t, . ne , r ip n 0 h\" r t d ,!                                                   \n                                            ip is.re .r : ) , f :l,ma e a e                                    is Pa 0 == t ar i ( r=t i \"\" ,                                                   \n                                               ) r v st , u anv Pa , r                                             s u t va de pse: r ( n =                                                     \n                                                 r r=  de : ) i t                                                     ur o ne st p !0) a                                                        \n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                                                                                                                                                                \n                                                                                                                                                                                                `,
    size: '12x16',
    colorMode: 'custom',
    backgroundColor: '#000000',
    fontSize: 4,
    showLineNumbers: false,
    textColor: '#53c1de'
  },
  '3': {
    value: 
`!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();
else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.React=t()}}
(function(){return function t(e,n,r){function o(a,u){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);
if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}
var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n||t)},l,l.exports,t,e,n,r)}
return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);
return o}({1:[function(t,e,n){"use strict";function r(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}
function o(t){var e=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===t[0]&&"$"===t[1]?
t.substring(2):t.substring(1))).replace(e,function(t){return n[t]})}var i={escape:r,unescape:o};
e.exports=i},{}],2:[function(t,e,n){"use strict";var r=t(19),o=(t(24),function(t){var e=this;
if(e.instancePool.length){var n=e.instancePool.pop();return e.call(n,t),n}return new e(t)}),
i=function(t,e){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,t,e),r}
return new n(t,e)},a=function(t,e,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return 
r.call(o,t,e,n),o}return new r(t,e,n)},u=function(t,e,n,r){var o=this;if(o.instancePool.length){
var i=o.instancePool.pop();return o.call(i,t,e,n,r),i}return new o(t,e,n,r)},s=function(t){
var e=this;t instanceof e||r("25"),t.destructor(),e.instancePool.length<e.poolSize&&e.instancePool.push(t)},
c=o,l=function(t,e){var n=t;return n.instancePool=[],n.getPooled=e||c,n.poolSize||(n.poolSize=10),
n.release=s,n},f={addPoolingTo:l,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:u};e.exports=f},
{19:19,24:24}],3:[function(t,e,n){"use strict";var r=t(26),o=t(4),i=t(5),a=t(7),u=t(8),
s=t(11),c=t(13),l=t(15),f=t(18),p=u.createElement,d=u.createFactory,y=u.cloneElement,
h=r,m=function(t){return t},v={Children:{map:i.map,forEach:i.forEach,count:i.count,toArray:i.toArray,only:f},
Component:o.Component,PureComponent:o.PureComponent,createElement:p,cloneElement:y,isValidElement:u.isValidElement,PropTypes:s,createClass:l,createFactory:d,createMixin:m,DOM:a,version:c,__spread:h};e.exports=v},
{11:11,13:13,15:15,18:18,26:26,4:4,5:5,7:7,8:8}],4:[function(t,e,n){"use strict";function r(t,e,n){
this.props=t,this.context=e,this.refs=c,this.updater=n||s}function o(t,e,n){this.props=t,
this.context=e,this.refs=c,this.updater=n||s}function i(){}var a=t(19),u=t(26),s=t(10),c=(t(14),t(23));t(24),t(17);
r.prototype.isReactComponent={},r.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&a("85"),
this.updater.enqueueSetState(this,t),e&&this.updater.enqueueCallback(this,e,"setState")},
r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this),t&&this.updater.enqueueCallback(this,t,"forceUpdate")};
i.prototype=r.prototype,o.prototype=new i,o.prototype.constructor=o,u(o.prototype,r.prototype),
o.prototype.isPureReactComponent=!0,e.exports={Component:r,PureComponent:o}},{10:10,14:14,17:17,19:19,23:23,24:24,26:26}],
5:[function(t,e,n){"use strict";function r(t){return(""+t).replace(E,"$&/")}function o(t,e){this.func=t,this.context=e,this.count=0}
function i(t,e,n){var r=t.func,o=t.context;r.call(o,e,t.count++)}function a(t,e,n){
if(null==t)return t;var r=o.getPooled(e,n);v(t,i,r),o.release(r)}function u(t,e,n,r){
this.result=t,this.keyPrefix=e,this.func=n,this.context=r,this.count=0}function s(t,e,n){
var o=t.result,i=t.keyPrefix,a=t.func,u=t.context,s=a.call(u,e,t.count++);Array.isArray(s)?c(s,o,n,m.thatReturnsArgument):
null!=s&&(h.isValidElement(s)&&(s=h.cloneAndReplaceKey(s,i+(!s.key||e&&e.key===s.key?"":r(s.key)+"/")+n)),
o.push(s))}function c(t,e,n,o,i){var a="";null!=n&&(a=r(n)+"/");var c=u.getPooled(e,a,o,i);v(t,s,c),u.release(c)}
function l(t,e,n){if(null==t)return t;var r=[];return c(t,r,null,e,n),r}function f(t,e,n){
return null}function p(t,e){return v(t,f,null)}function d(t){var e=[];return c(t,e,null,m.thatReturnsArgument),e}
var y=t(2),h=t(8),m=t(22),v=t(20),b=y.twoArgumentPooler,g=y.fourArgumentPooler,E=/\/+/g;
o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},y.addPoolingTo(o,b),
u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,
this.context=null,this.count=0},y.addPoolingTo(u,g);var x={forEach:a,map:l,mapIntoWithKeyPrefixInternal:c,count:p,toArray:d};e.exports=x},
{2:2,20:20,22:22,8:8}],6:[function(t,e,n){"use strict";var r={current:null};e.exports=r},{}],
7:[function(t,e,n){"use strict";var r=t(8),o=r.createFactory,i={a:o("a"),abbr:o("abbr"),
address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),
bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),
cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),
dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),
h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),
meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),
var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};e.exports=i},
{8:8}],8:[function(t,e,n){"use strict";function r(t){return void 0!==t.ref}function o(t){
return void 0!==t.key}var i=t(26),a=t(6),u=(t(25),t(14),Object.prototype.hasOwnProperty),
s=t(9),c={key:!0,ref:!0,__self:!0,__source:!0},l=function(t,e,n,r,o,i,a){return{$$typeof:s,type:t,key:e,ref:n,props:a,_owner:i}};
l.createElement=function(t,e,n){var i,s={},f=null,p=null;if(null!=e){r(e)&&(p=e.ref),o(e)&&(f=""+e.key),void 0===e.__self?null:e.__self,void 0===e.__source?null:e.__source;for(i in e)
u.call(e,i)&&!c.hasOwnProperty(i)&&(s[i]=e[i])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var 
`,
    mode: 'monokai',
    fontSize: 10,
    language: 'javascript',
    showLineNumbers: false,
    size: '12x16',
    shirtColor: 'heather-navy',
  },
  '5': {
    value: 
`\n\n\n\n\n                                       =   (
                                        255,
                                      lambda
                               V       ,B,c
                             :c   and Y(V*V+B,B,  c
                               -1)if(abs(V)<6)else
               (              2+c-4*abs(V)**-0.4)/i
                 )  ;v,      x=1500,1000;C=range(v*x
                  );import  struct;P=struct.pack;M,\
            j  ='<QIIHHHH',open('M.bmp','wb').write
for X in j('BM'+P(M,v*x*3+26,26,12,v,x,1,24))or C:
            i  ,Y=_;j(P('BBB',*(lambda T:(T*80+T**9
                  *i-950*T  **99,T*70-880*T**18+701*
                 T  **9     ,T*i**(1-T**45*2)))(sum(
               [              Y(0,(A%3/3.+X%v+(X/v+
                               A/3/3.-x/2)/1j)*2.5
                             /x   -2.7,i)**2 for  \
                               A       in C
                                      [:9]])
                                        /9)
                                       )   )`,
    showLineNumbers: false,
    mode: 'solarized_light',
    size: '10x10',
    language: 'python',
    fontSize: 13,
    shirtColor: 'yellow',
  },
});

export const getSample = (id, productType) => {
  const sampleObj = samples[id]
  if (productType === 'shirt') {
    return Object.assign({}, sampleObj, { 
      fontSize: +(sampleObj.fontSize / 2.25).toFixed(1),
    })
  }
  return sampleObj
}

export default samples;
