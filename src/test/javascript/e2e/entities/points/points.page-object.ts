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
    return this.title.getText();
  }
}

export class PointsUpdatePage {
  pageTitle = element(by.id('jhi-points-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  dateInput = element(by.id('field_date'));
  mindInput = element(by.id('field_mind'));
  motiveInput = element(by.id('field_motive'));
  motionInput = element(by.id('field_motion'));
  profileImageInput = element(by.id('file_profileImage'));
  weeklyGoalInput = element(by.id('field_weeklyGoal'));
  userSelect = element(by.id('field_user'));

  async getPageTitle() {
    return this.pageTitle.getText();
  }

  async setDateInput(date) {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput() {
    return await this.dateInput.getAttribute('value');
  }

  async setMindInput(mind) {
    await this.mindInput.sendKeys(mind);
  }

  async getMindInput() {
    return await this.mindInput.getAttribute('value');
  }

  async setMotiveInput(motive) {
    await this.motiveInput.sendKeys(motive);
  }

  async getMotiveInput() {
    return await this.motiveInput.getAttribute('value');
  }

  async setMotionInput(motion) {
    await this.motionInput.sendKeys(motion);
  }

  async getMotionInput() {
    return await this.motionInput.getAttribute('value');
  }

  async setProfileImageInput(profileImage) {
    await this.profileImageInput.sendKeys(profileImage);
  }

  async getProfileImageInput() {
    return await this.profileImageInput.getAttribute('value');
  }

  async setWeeklyGoalInput(weeklyGoal) {
    await this.weeklyGoalInput.sendKeys(weeklyGoal);
  }

  async getWeeklyGoalInput() {
    return await this.weeklyGoalInput.getAttribute('value');
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
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
