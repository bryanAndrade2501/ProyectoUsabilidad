const products = [
    {
        "id": 0,
        "category": "celulares",
        "productName": "INFINIX SMART 7 (4+64GB) ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 1,
        "category": "celulares",
        "productName": "TECNO POVA 4 LG7N 8GB + 256GB ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 2,
        "category": "celulares",
        "productName": "CELULAR INFINIX HOT 20i 7GB RAM 128GB ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 3,
        "category": "celulares",
        "productName": "Celular Infinix Note 30 pro 8+256 ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 4,
        "category": "celulares",
        "productName": "HONOR X8A 8+128GB ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 5,
        "category": "celulares",
        "productName": "Celular Infinix NOTE 12 8GB + 256GB X670 ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 6,
        "category": "celulares",
        "productName": "Celular Samsung S23 ULTRA SM-S918B 512GB ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 7,
        "category": "celulares",
        "productName": "Celular Xiaomi Redmi note 11s 6+128gb ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/166155-500-auto?v=1772711018&width=500&height=auto&aspect=true",
        "price": "$235,86"
    },
    {
        "id": 8,
        "category": "tablets",
        "productName": "Tablet Kids Quad core 1gb, 16gb",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 9,
        "category": "tablets",
        "productName": "Tablet Amazon fire HD 2022 ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 10,
        "category": "tablets",
        "productName": "Samsung Galaxy S6 Lite 64gb 4gb",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 11,
        "category": "tablets",
        "productName": "Tablet Amazon Fire 8plg, 32g",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 12,
        "category": "tablets",
        "productName": "Galaxy Tab S6 Lite 128gb 4gb Ra ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 13,
        "category": "tablets",
        "productName": "Tablet Xiaomi PAD 5, 256gb, 6gb, WIFI ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 14,
        "category": "tablets",
        "productName": "Amazon Fire Kids Edition 2019, 16gb, rosado y azul ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 15,
        "category": "tablets",
        "productName": "Tablet Amazon Fire 10 2021, 32gb ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/161679-500-auto?v=1772753196&width=500&height=auto&aspect=true",
        "price": "$149,00"
    },
    {
        "id": 16,
        "category": "computadoras",
        "productName": "Laptop acer Intel, 128gb+4gb+ 15.6 pulg, huella, w11 ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 17,
        "category": "computadoras",
        "productName": "IMPRESORA EPSON L3250 110V REEMPLAZO DE L3150 ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 18,
        "category": "computadoras",
        "productName": "IMPRESORA EPSON L3210 110V MULTIFUNCIÓN NUEVO MODELO ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 19,
        "category": "computadoras",
        "productName": "IMPRESORA EPSON L4260 MULTIFUNCIÓN REEMPLAZO DE L4160 ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 20,
        "category": "computadoras",
        "productName": "Monitor 19 pulgadas usado ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 21,
        "category": "computadoras",
        "productName": "Laptop HP Core i5 12va, 512gb, 16gb, 15.6hd, huella ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 22,
        "category": "computadoras",
        "productName": "DISCO SÓLIDO 240GB ADATA ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 23,
        "category": "computadoras",
        "productName": "Monitor Lg 20 Pulgadas, Hdmi, 1366 X 768 Led, Ip, 20mk400 ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/156899-500-auto?v=1772751953&width=500&height=auto&aspect=true",
        "price": "$109,00"
    },
    {
        "id": 24,
        "category": "hogar",
        "productName": "TRAPEADOR MAGICO CON ESPRIMIDOR 360 LAVADA Y SECADO ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    },
    {
        "id": 25,
        "category": "hogar",
        "productName": "ESENCIA PARA HUMIDIFICADOR AGRADABLE FRAGANCIA ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    },
    {
        "id": 26,
        "category": "hogar",
        "productName": "Robot aspiradora ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    },
    {
        "id": 27,
        "category": "hogar",
        "productName": "SILLA EIFFEL ESTILO RETRO DE MADERA, MESA, BAR ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    },
    {
        "id": 28,
        "category": "hogar",
        "productName": "Dispensador de agua eléctrico ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    },
    {
        "id": 29,
        "category": "hogar",
        "productName": "Cinta doble faz 1 metros ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    },
    {
        "id": 30,
        "category": "hogar",
        "productName": "Herramienta multifuncional de cocina ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    },
    {
        "id": 31,
        "category": "hogar",
        "productName": "Sellador de fundas ",
        "image": "https://novicompu.vtexassets.com/arquivos/ids/160096-500-auto?v=1772563180&width=500&height=auto&aspect=true",
        "price": "$2,99"
    }
]

export default products