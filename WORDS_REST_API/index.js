import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import wordsRoutes from './routes/words.js';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());
app.use('/words', wordsRoutes);

//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        components: {},
        info: {
            title: 'Words API',
            description: "An API implementing a collection of words",  // improve that
            contact: {
                "name": "Aleksander Rębisz",
                "email": "aleksander.rebisz@gmail.com"
              },
            servers: ["http://localhost:3000"]
        }
    },

    apis: ["routes/words.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));