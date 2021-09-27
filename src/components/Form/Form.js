const Form = function () {
  return `
    <div class="overlay">
      <div class="form-wrapper">
        <form class="form">
          <div class="form-item">
            <label for="form-item--title">Title</label>
            <input type="text" id="form-item--title" name="title" />
          </div>

          <div class="form-item">
            <label for="form-item--description">Description</label>
            <input type="text" id="form-item--description" name="description" />
          </div>

          <div class="form-group">
            <div class="form-item left">
              <label for="form-item--date">Due Date</label>
              <input type="text" id="form-item--date" name="date" />
            </div>

            <div class="form-item right">
              <p>Priority</p>
              <div class="radio-wrapper">
                <div class="radio-item">
                  <input
                    type="radio"
                    id="form-item--priority-low"
                    name="priority"
                    value="low"
                  />
                  <label for="form-item--priority-low">Low</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    id="form-item--priority-normal"
                    name="priority"
                    value="normal"
                    checked
                  />
                  <label for="form-item--priority-normal">Normal</label>
                </div>
                <div class="radio-item">
                  <input
                    type="radio"
                    id="form-item--priority-high"
                    name="priority"
                    value="high"
                  />
                  <label for="form-item--priority-high">High</label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-item">
            <label for="form-item--notes">Notes</label>
            <textarea id="form-item--notes" name="notes"></textarea>
          </div>

          <p>Checklist</p>
          <div class="form-item checklist">
            <div class="checklist-item">
              <input type="text" name="checklist" />
              <button id="btn-new-checklist-item" type="button" class="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                </svg>
              </button>
            </div>
          </div>

          <div class="form-item">
            <button id="btn-submit-form" type="submit" class="btn">Done</button>
          </div>
          <button id="btn-close-form" class="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  `;
};

export default Form;
