exports.up = async function up(sql) {
  await sql`
	INSERT INTO teams (teamname) VALUES ('Sopron'), ('Gyor'),('Vienna'),('Budapest'),('Graz'),('Salzburg');
	`;
};

exports.down = async function down(sql) {
  await sql`
	DELETE FROM teams;
	`;
};
