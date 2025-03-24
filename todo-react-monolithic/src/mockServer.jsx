import { createServer, Model } from 'miragejs';

const startMockServer = () => {
	createServer({
		models: {
			note: Model,
		},
		routes() {
			this.urlPrefix = 'http://localhost:5173/api';

			this.get('/notes', (schema) => {
				return schema.all('note');
			});
			this.get('/notes/:id', (schema, req) => {
				let id = req.params.id;
				return schema.find('note', id);
			});
			this.post('/note', (schema, req) => {
				let attrs = JSON.parse(req.requestBody);
				return schema.create('note', attrs);
			});
			// @ts-ignore
			this.patch('/note/:id', (schema, req) => {
				let attrs = JSON.parse(req.requestBody);
				let id = req.params.id;
				let old = schema.find('note', id);
				return old.update(attrs);
			});
			this.delete('/note/:id', (schema, req) => {
				let id = req.params.id;
				schema.find('note', id).destroy();
				return id;
			});
		},
	});
};

export default startMockServer;
