const { User } = require('../../src/app/models');

describe('Authentication', () => {
	it('should sum two numbers', async () => {
		const user = await User.create({
			name: 'ulisses',
			email: 'ulisses@nanogigasfsdfd.com',
			password: '41234',
		});

		console.log(user);

		expect(user).toBe({
			name: 'ulisses',
			email: 'ulisses@nanogiga.com',
			password: '41234',
		});
	});
});
