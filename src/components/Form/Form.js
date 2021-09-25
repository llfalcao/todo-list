const Form = function () {
  return `
    <div class="overlay">
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
            +
          </button>
        </div>
        </div>

        <div class="form-item">
          <button id="btn-submit-form" type="submit" class="btn">Done</button>
        </div>
      </form>
    </div>
  `;
};

export default Form;
