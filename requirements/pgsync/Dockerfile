FROM python:3.9

ARG WORKDIR=/usr/src/app
RUN mkdir $WORKDIR

WORKDIR $WORKDIR

# Copy the requirements file
COPY ./tools/entrypoint.sh ./entrypoint.sh
COPY ./conf/schema.json ./schema.json

RUN chmod +x ./entrypoint.sh \
	&& chmod +x ./schema.json

RUN pip install pgsync

RUN apt update \
	&& apt install -y \
		moreutils \
		jq \
		wait-for-it

ENTRYPOINT ["sh", "./entrypoint.sh"]