exports.up = async function up(sql) {
  await sql`
	INSERT INTO sports (sportname) VALUES ('Handball'),('Football'),('Rugby');
	`;
};

exports.down = async function down(sql) {
  await sql`
	DELETE FROM sports;
	`;
};
