const validateMessages =
{
    required: '${label} is required!',
    types: 
    {
        email: '${label} is invalid!',
    },
    string:
    {
        min: '${label} must be at least ${min} characters!'
    }
};

export default validateMessages;