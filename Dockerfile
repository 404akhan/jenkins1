FROM	404akhan/node-hello:1

RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'

RUN cd /app && npm install nodemon --save
