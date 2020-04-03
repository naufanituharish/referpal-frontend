const BASE_URL = 'https://api-staging.referpal.org/backend/v1';
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIwNTQ0LCJ1dWlkIjoiNzVlYTE4OTQtOGNmOC00MmJmLWFkOWQtNzU0OWQ0NmM3YmU4IiwiZmlyc3ROYW1lIjoiQXJpZWYiLCJsYXN0TmFtZSI6IkFyaWVmIiwiZW1haWwiOiJhcmllZkBnbWFpbC5jb20iLCJwaG9uZSI6Iis2Mi02MjgxNTU1ODM2MjYiLCJyZWZlcnJhbENvZGUiOiJrYWthZ2UiLCJyZWZlcnJlciI6bnVsbCwiaW1hZ2VVcmwiOiJodHRwczovL3JlZmVycGFsLWNhbmRpZGF0ZXMuczMtYWNjZWxlcmF0ZS5hbWF6b25hd3MuY29tL3VzZXJfcGhvdG9zLzEyMDU0NC8yMDE5MTEyOF8yNjIxN2Y4N2YyMmY5YjNmNGIxMWY2YmZhMzMyNzQ0MS5qcGVnIiwicm9sZXMiOltdLCJpYXQiOjE1ODM2NzI4ODJ9.NUlNb8nAKO12adLSp6dv_7ICw1NAldMWf7DQA_XjhIg';
const STORE_TYPE = {
    // Items Category
    GET_CATEGORY_REQUESTING:'get_category_requesting',
    GET_CATEGORY_SUCCESS:'get_category_success',
    GET_CATEGORY_ERROR: 'get_category_error',

    // Items
    GET_ITEMS_REQUESTING:'items_requesting',
    GET_ITEMS_SUCCESS:'items_success',
    GET_ITEMS_ERROR: 'items_error',

    // Items By Category
    GET_BYCATEGORY_REQUESTING:'bycategory_requesting',
    GET_BYCATEGORY_SUCCESS:'bycategory_success',
    GET_BYCATEGORY_ERROR: 'bycategory_error',
    RESET_BYCATEGORY: 'reset_bycategory',
};

export {BASE_URL,TOKEN, STORE_TYPE}