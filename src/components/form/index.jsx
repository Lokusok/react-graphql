import PropTypes from 'prop-types';

function Form({ fields, onSubmit, onChange, legend, disabled }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>{legend}</legend>
        
        <div>
          <label>
            Post title:{' '}
            <input
              type="text"
              placeholder="Post title"
              required
              value={fields.title}
              name="title"
              onChange={onChange}
              disabled={disabled}
            />
          </label>
        </div>
        <div>
          Post body:{' '}
          <br />
          <textarea
            rows="7"
            placeholder="Post body"
            required
            value={fields.body}
            name="body"
            onChange={onChange}
            disabled={disabled}
          ></textarea>
        </div>
        <button disabled={disabled} type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.shape(),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  legend: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Form;
