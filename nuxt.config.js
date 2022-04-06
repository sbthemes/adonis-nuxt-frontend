export default {
    head: {
        title: 'baboost',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
            },
        ],
    },

    css: ['~/assets/css/tailwind.css'],

    router: {
        middleware: ['auth'],
    },

    plugins: [{ src: '~/plugins/axios.js' }],

    components: true,

    buildModules: ['@nuxt/postcss8', '@nuxtjs/composition-api/module'],

    modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/toast'],

    axios: {
        baseURL: process.env.API_URL,
    },

    auth: {
        localStorage: false,

        cookie: {
            prefix: process.env.COOKIE_PREFIX,
            options: {
                maxAge: 31536000, // 1 year
                secure: process.env.COOKIE_SECURE,
            },
        },

        redirect: {
            login: '/login',
            logout: '/login',
            home: '/',
        },

        strategies: {
            local: {
                token: {
                    property: 'token',
                    maxAge: 31536000, // 1 year
                },

                user: {
                    property: 'data',
                },

                endpoints: {
                    login: { url: '/auth/login', method: 'post' },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/auth/user', method: 'get' },
                },
            },
        },
    },

    toast: {
        position: 'top-center',
        duration: 5000,
        singleton: true,
    },

    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
};
