const bcrypt = require('bcrypt');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncateSync');

describe('User', () => {
	beforeEach(truncate);

	it('should encrypt user password', async () => {
		const password = '123456';
		const user = await User.create({
			name: 'Ulisses',
			email: 'ulisses@nanogiga.com',
			password,
		});

		const compareHash = await bcrypt.compare(password, user.password_hash);

		expect(compareHash).toBe(true);
	});
});
