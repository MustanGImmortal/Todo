FROM node:alpine3.10
ENV PROJECT_DIR app
ENV PROJECT_PATH $PROJECT_DIR/

RUN mkdir -p $PROJECT_DIR

COPY . $PROJECT_PATH

RUN ls $PROJECT_PATH

RUN cd $PROJECT_PATH && \
    npm install

ENTRYPOINT ["app/docker-entrypoint.sh"]