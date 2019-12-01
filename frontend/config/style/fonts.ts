const AristotelicaRegularTtf = 'static/fonts/aristotelica_regular.ttf';
const ProductSansRegularTtf = 'static/fonts/product_sans_regular.ttf';
const RobotoRegularTtf = 'static/fonts/roboto_regular.ttf';

export const fonts = `
    @font-face {
        font-family: open-sans;
        src:
            url(${AristotelicaRegularTtf}) format("truetype");
        font-style:normal;
        font-weight:400
    }
    @font-face {
        font-family: product-sans;
        src:
            url(${ProductSansRegularTtf}) format("truetype");
        font-style:normal;
        font-weight:400
    }
    @font-face {
        font-family: roboto;
        src:
            url(${RobotoRegularTtf}) format("truetype");
        font-style:normal;
        font-weight:400
    }
`;