const { User } = require('../../src/app/models');

const request = require('supertest');
const app = require('../../src/app');

const truncate = require('../utils/truncateSync');

describe('Authentication', () => {
	beforeEach(truncate);

	it('should authenticate with valid credentials', async () => {
		const user = User.create({
			name: 'Ulisses',
			email: 'ulisses@nanogiga.com',
			password: '131231412',
		});

		const response = await request(app).post('/session').send({
			email: user.email,
			password: user.password,
		});

		expect(response.status).toBe(200);
	});
});
