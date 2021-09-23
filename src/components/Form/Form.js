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

        <div class="form-item">
          <label for="form-item--date">Due Date</label>
          <input type="text" id="form-item--date" name="date" />
        </div>

        <p>Priority</p>
        <div class="form-item radio-wrapper">
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

        <div class="form-item">
          <label for="form-item--notes">Notes</label>
          <textarea id="form-item--notes" name="notes"></textarea>
        </div>

        <div class="form-item">
          <label for="form-item--checklist">Checklist</label>
          <input type="text" id="form-item--checklist" name="checklist" />
          <button type="button" id="btn-new-checklist-item" class="btn" >Add more</button>
        </div>

        <div class="form-item">
          <button type="submit" class="btn">Done</button>
        </div>
      </form>
    </div>
  `;
};

export default Form;
