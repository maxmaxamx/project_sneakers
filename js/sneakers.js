const products = [
    { id: 1, title: "Nike Air Force 1 '07", price: 100, description: "Кроссовки Nike Air Force 1 '07 LV8 ", image: [
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/cb8/g13s2y96mc1u9itrrpn0qnnxfwjgiuzx/457_457_1/hv5752-410-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/a67/193v4tcyjluli478iw4rxp3b18mwj3vp/457_457_1/hv5752-410-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/1a1/7msvhb4i2xbnlrbtpce2rngu6std4tyz/457_457_1/hv5752-410-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/0f2/4z01w8d92po559usnr3zse7bw3hxyrij/457_457_1/hv5752-410-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/f31/m09prj4r6cu6uud403md7ccr97zyai4i/457_457_1/hv5752-410-e.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/687/6h1zngz82s7x15wtv64d2nfjoyz7lnk3/457_457_1/hv5752-410-f.webp"
    ]},
    { id: 2, title: "Nike Lunar Roam", price: 200, description: "Кроссовки Nike Lunar Roam Premium", image: [
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/8b8/az60cl39366coxsdf9fkl41xm64el11y/457_457_1/hv2523-002-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/e54/xaiq0dw3vf0sux7u0uewgh42rvnki9uf/457_457_1/hv2523-002-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/2ea/u2a5069dm284ozjj5jw6ezsk5bw0hk1i/457_457_1/hv2523-002-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/f2c/ub3zrd4ev7x2c4pwik34f2busz2aa29l/457_457_1/hv2523-002-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/fb4/b9saptvz86xdnfuixdbuyepmhri9udy0/457_457_1/hv2523-002-e.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/43c/exa2w57h9gccrzb16cfj21q150v6loe7/457_457_1/hv2523-002-f.webp"
    ]},
    { id: 3, title: "Nike Cortez", price: 150, description: "Кроссовки Nike Cortez Leather", image: [
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/659/xohj8224g2hou0ejqsv5f3v6to157ns4/457_457_1/dm4044-108-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/cbb/g2094p7njj6uw6ipky4l8e00mt1pu5b5/457_457_1/dm4044-108-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/2ff/f34khr8d7qaxx15qv5dw29e167bg0849/457_457_1/dm4044-108-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/410/v395mnzjfniqa8xil00arr5c2hp9joqd/457_457_1/dm4044-108-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/21a/r4xhg4rdihbx7kys5gug094gj0an0g01/457_457_1/dm4044-108-e.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/a29/4i0ru2d8n3wkqo2nj12puo71v3x9f9ih/457_457_1/dm4044-108-f.webp"
    ]},
    { id: 4, title: "Nike Air Max Pulse", price: 300, description: "Кроссовки Nike Air Max Pulse", image: [
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/a4f/f698jlcpddqotkihf58qatyx50t30y14/457_457_1/fz2143-004-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/e46/5nlmu088o2vq1srz24mped8ce38dj0fs/457_457_1/fz2143-004-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/6c9/16xp622ygdvldb8re676g0bq0wrbnpqb/457_457_1/fz2143-004-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/69f/0v7x57vmlldmyz9q2uvor7sol2xhz7gw/457_457_1/fz2143-004-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/0df/dm0d7n78tlcb2y4y2nt0bcru55su2v5i/457_457_1/fz2143-004-e.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/00a/8ko28eiisr7inx0odh2sr07mnkldj6hp/457_457_1/fz2143-004-f.webp"
    ]},
    { id: 5, title: "Air Jordan 11 Retro", price: 130, description: "Кроссовки Air Jordan 11 Retro &quot;Legend Blue&quot", image:[
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/741/imcc7mggaa7x3xzm3hpmcysdytpzqh76/457_457_1/ct8012-104-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/326/hl39p6bh7povmf11c7hdns46uz8jf0ay/457_457_1/ct8012-104-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/dd7/ug14qn1yz5ghgsq2ah4s2dcn5lg43b63/457_457_1/ct8012-104-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/7c9/g0dm582vqc4kwhnxbwxin6r960nq843n/457_457_1/ct8012-104-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/043/upmyqa1neyw90p1712cz9zn7cvbhm8gj/457_457_1/ct8012-104-e.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/e0e/l3hiwd0bmhjysr6n5u6rvtl605b0a2sb/457_457_1/ct8012-104-f.webp"
    ]},
    { id: 6, title: "Adidas Temper Run 2", price: 250, description: "Кроссовки Adidas Temper Run 2", image:[
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/56f/xtbl143r8ufb9e9rzrss0v3tapl3ckg6/457_457_1/ih0402-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/dd1/4xoxy3dtwh99hvfy2cahr4c2qcrf3tdb/457_457_1/ih0402-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/4f8/svaw21j1pn0zqon6k8dfx7kzoeulzmzd/457_457_1/ih0402-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/530/ce9j57vbu4wzyf5m5rvdlpgvc8h6zmey/457_457_1/ih0402-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/92a/57sb3me06fid8fycfonrnb2zfz1n4nb2/457_457_1/ih0402-e.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/af4/eifrmsnvo3i8o9nbdpgat8qvxtzwn9hk/457_457_1/ih0402-f.webp"
    ]},
    { id: 7, title: "Nike Dunk Low Retro SE", price: 350, description: "Кроссовки Nike Dunk Low Retro SE", image:[
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/597/14v53qekoi26cqmxvco84gr3dqyycdgc/457_457_1/hf3141-400-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/64e/rmsi1wlsn9ib3a1j8jhy5xbasrcoxl65/457_457_1/hf3141-400-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/f34/01y8iire96izcsccawee6ly1ob4khnf2/457_457_1/hf3141-400-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/90b/7ec7vyxoavrre54qv3arbhowbqpqyr9s/457_457_1/hf3141-400-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/5a6/dc6rpfo8azx57xq2k1uk7kk6ispxgwi5/457_457_1/hf3141-400-e.webp"
    ]},
    { id: 8, title: "Nike Air More Uptempo", price: 325, description: "Кроссовки Nike Air More Uptempo Low", image:[
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/1ed/fewn1ezavbdusafutrvizz27t9ukl0zh/457_457_1/fz3055-100-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/0fc/66m4qcz2sr1jigfu6qfsty3l22xzgw2e/457_457_1/fz3055-100-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/89c/jv4cktv1lygiptyr8kc68as7j73wpyeq/457_457_1/fz3055-100-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/3ac/urv969sa9vc4athqwqaf1s238gi6wyn1/457_457_1/fz3055-100-d.webp"
        
    ]},
    { id: 9, title: "Nike Air Max 90", price: 175, description: "Кроссовки Nike Air Max 90", image:[
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/1a8/9dxgcowqcfcqbgvgxvavptufoktwctbb/457_457_1/if0670-600-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/b17/z7a3de8pxyzs27sb51eyb7j5f1zlxoje/457_457_1/if0670-600-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/e6c/ecc04l1n00u6at639lw8foqr6uu37rpu/457_457_1/if0670-600-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/b57/mc0lgt0crqz3oub28okrr5nj4xzijqyr/457_457_1/if0670-600-d.webp"
    ]},
    { id: 10, title: "Nike Air Max Ishod", price: 175, description: "Кроссовки Nike Air Max Ishod", image:[
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/41e/ha70i20qxdakbm5r1c5ewy6b1l9uhl87/457_457_1/hf3062-001-a.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/49b/shbvk1olbjmqv7g4t3b9azqbhics0y45/457_457_1/hf3062-001-b.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/ffd/lwmsznbh30vllzf71cpzi37luh5ux7bq/457_457_1/hf3062-001-c.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/a03/s3ubvfh06q6su58ct0k230i1px5a5j4x/457_457_1/hf3062-001-d.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/259/zcpn3spy5tn9wygboymn488vp2hehbuf/457_457_1/hf3062-001-e.webp",
        "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/19c/3xptqn28idq7tndnz3hw3tzhmpbulf3j/457_457_1/hf3062-001-f.webp"
        
    ]},
    { id: 11, title: "Nike Air Max Dn", price: 230, description: "Кроссовки Nike Air Max Dn", image:[
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/a48/rctuzcqe3zcqogdiswg1hyixtigm1sbq/457_457_1/hv3521-700-a.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/b75/8e0hx4bkfegm249mk7f8p30leqzxnfdw/457_457_1/hv3521-700-b.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/9e1/8a4cnhejdz8e4s1yw3i950ifgxh5eg8j/457_457_1/hv3521-700-c.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/6f9/b2lb5gzk9vjuan8i8ce4pvgxb0r1jzha/457_457_1/hv3521-700-d.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/f20/ymigcyiv0f4oz7746rsazxajap9m9tlt/457_457_1/hv3521-700-e.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/578/45ia015ib9do10ud6oq17hgrrwgfw4de/457_457_1/hv3521-700-f.webp"
    ]},
    { id: 12, title: "Jordan Max Aura 6", price: 230, description: "Кроссовки Jordan Max Aura 6", image:[
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/327/rm85nvlvdvkqp4eaajb25r6wvvrjsxz3/457_457_1/fq7943-100-a.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/175/s1ksc1d85ndlrj5bwowuwu8853f4ift4/457_457_1/fq7943-100-b.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/d4d/ve1r5b1k2e6prb17wbpepgop5lax0fgc/457_457_1/fq7943-100-c.webp",
         "https://all-stars.by/local/templates/newDev/upload/upload/resize_cache/iblock/010/ku16253wpcjxruofkd7tj1r2dqme6vas/457_457_1/fq7943-100-d.webp"
    ]},
];
