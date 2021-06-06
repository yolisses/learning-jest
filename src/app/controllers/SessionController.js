class SessionController {
	async validate(req, res) {
		return res.status(200).send();
	}
}

module.exports = new SessionController();
