/**
 * Generate a selective update query based on a request body:
 *
 * - table: where to make the query
 * - items: the list of columns you want to update
 * - key: the column that we query by (e.g. username, handle, id)
 * - id: current record ID
 *
 * Returns object containing a DB query as a string, and array of
 * string values to be updated
 *
 */

function sqlForPartialUpdate(table, items, key, id) {
  let idx = 1;
  let columns = [];

  // Filter out keys that start with "_" -- we don't want these in DB
  for (let column in items) {
    if (column.startsWith("_")) {
      delete items[column]; // BUG FIX===Removing unwanted keys
    }
  }

  // Prepare column assignments for the query
  for (let column in items) {
    columns.push(`${column}=$${idx}`); // Append column and placeholder
    idx += 1;
  }

  // Build the query
  let cols = columns.join(", ");
  let query = `UPDATE ${table} SET ${cols} WHERE ${key}=$${idx} RETURNING *`; // Construct SQL query

  // Prepare values array
  let values = Object.values(items);
  values.push(id); // Add the ID as the last value for the WHERE clause

  return { query, values }; // Return the query and values
}

module.exports = sqlForPartialUpdate;
