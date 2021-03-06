import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class PointsComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-points div table .btn-danger'));
  title = element.all(by.css('jhi-points div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class PointsUpdatePage {
  pageTitle = element(by.id('jhi-points-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  dateInput = element(by.id('field_date'));
  exerciseInput = element(by.id('field_exercise'));
  mealsInput = element(by.id('field_meals'));
  waterInput = element(by.id('field_water'));
  notesInput = element(by.id('field_notes'));
  userSelect = element(by.id('field_user'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDateInput(date) {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput() {
    return await this.dateInput.getAttribute('value');
  }

  async setExerciseInput(exercise) {
    await this.exerciseInput.sendKeys(exercise);
  }

  async getExerciseInput() {
    return await this.exerciseInput.getAttribute('value');
  }

  async setMealsInput(meals) {
    await this.mealsInput.sendKeys(meals);
  }

  async getMealsInput() {
    return await this.mealsInput.getAttribute('value');
  }

  async setWaterInput(water) {
    await this.waterInput.sendKeys(water);
  }

  async getWaterInput() {
    return await this.waterInput.getAttribute('value');
  }

  async setNotesInput(notes) {
    await this.notesInput.sendKeys(notes);
  }

  async getNotesInput() {
    return await this.notesInput.getAttribute('value');
  }

  async userSelectLastOption(timeout?: number) {
    await this.userSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userSelectOption(option) {
    await this.userSelect.sendKeys(option);
  }

  getUserSelect(): ElementFinder {
    return this.userSelect;
  }

  async getUserSelectedOption() {
    return await this.userSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class PointsDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-points-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-points'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
