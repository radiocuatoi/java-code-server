FROM ubuntu:18.04
RUN apt-get update &&\
apt-get install -y openjdk-11-jdk curl wget git wget curl openssl net-tools locales &&\
curl -sL https://deb.nodesource.com/setup_12.x | bash  &&\
apt-get install -y yarn nodejs &&\
apt-get clean 
WORKDIR /tmp
#RUN wget https://github.com/cdr/code-server/releases/download/1.1156-vsc1.33.1/code-server1.1156-vsc1.33.1-musl-x64.tar.gz
RUN wget https://github.com/cdr/code-server/releases/download/1.1156-vsc1.33.1/code-server1.1156-vsc1.33.1-linux-x64.tar.gz
RUN tar -xf *.tar.gz && mv code-server*/code-server /bin/
ADD extensions/ /root/.local/share/code-server/extensions/
WORKDIR /project
CMD '/bin/code-server'
#ENTRYPOINT '/bin/code-server -H /project'