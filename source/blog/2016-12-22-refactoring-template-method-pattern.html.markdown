---
title: Refactoring to design patterns- The template pattern
date: '2016-12-22	 11:54:19'
tags:
- cap-jerry
- yedhu
- technology
link: http://www.multunus.com/blog/2016/12/refactoring-template-method-pattern/
---

The [template method pattern](https://sourcemaking.com/design_patterns/template_method) is a useful design pattern when you have a bunch of classes which follow a similar algorithm/steps but vary in the implementation of the steps.

Let's take a look a simple example where refactoring to this pattern improves the overall maintainability of the code.

### PDF generation

##### Before refactoring

We had a code that generates PDF from a report. Here is the class which does that:

~~~ ruby
class ReportPDFGenerator
  def generate(data)
    add_encoding(data)
    # Linear PDF report Generation Code
  end

  def add_encoding(pdf)
    # Add encoding if requested
    # else return the same PDF
  end
end
~~~

Later, we introduced another type of report called complex report, where the way of generating the report is entirely different. We wrote a class for that like this:

~~~ ruby
class ComplexReportPDFGenerator
  def generate(data)
    add_encoding(data)
    # Complex PDF Generation Code
  end

  private

  def add_encoding(data)
    # Add encoding if requested
    # else return the same PDF
  end
end
~~~

Refactoring this into the template pattern to remove some duplication, more importantly, to easily support another requirement where there is a slight change in how the PDF generation varies.

##### After refactoring

~~~ ruby
class ReportPDFGenerator
  def initialize(data)
    @data = data
  end

  def generate(data)
    add_encoding(data)
    generate_pdf(data)
  end

  private

  def add_encoding(data)
    # default implementation
  end

  def generate_pdf(data)
    #default implementation
  end
end
~~~

Linear Report PDF Generator:

~~~ ruby
class LinearReportPDFGenerator < ReportPdfGenerator
  def generate_pdf(data)
    # Linear PDF Generation Code
  end
~~~

Complex Report PDF Generator:

~~~ ruby
class ComplexReportPDFGenerator < ReportPDFGenerator
  def generate_pdf(data)
    # complex pdf Generation Code
  end
end
~~~

Now that we are aware of what template patterns mean, let's take a look at another slightly more complicated scenario. Both these examples were taken from our codebases, it is just that we have removed some details that are not relevant.

The following example is taken from a micro-financing application that we work on.

##### Before refactoring

~~~ruby
class BankAccountDepositDisburser
  def initialize(loan)
    @loan = loan
    @loan_validator = LoanValidator.new @loan
    @loan_agreement_validator = LoanAgreementValidator.new @loan.loan_agreement

    @bank_deposit_validator = BankAccountDepositValidator.new(@loan.bank_account_deposit)
  end

  def disburse
    if valid?
      @loan.disburse!
    end
  end

  def valid?
    [@loan_validator.valid?, @loan_agreement_validator.valid?, @bank_deposit_validator.valid?].all?
  end
end

class ACHDepositDisburser
  def initialize(loan)
    @loan = loan
    @loan_validator = LoanValidator.new @loan
    @loan_agreement_validator = LoanAgreementValidator.new @loan.loan_agreement

    @ach_deposit_validator = AchDepositValidator.new @loan.ach_deposit
  end

  def disburse
    if valid?
      @loan.disburse!
    end
  end

  def valid?
    [@loan_validator.valid?, @loan_agreement_validator.valid?, @ach_deposit_validator.valid?].all?
  end
end

~~~

In the above snippet, you can see that both these class are in charge of disbursing loans, it just that the validations that need to run before we can disburse these loans are different. There are also some default validations that needs to run. This seems like a good opportunity to refactor to Template pattern.

##### After refactoring

~~~ruby
class LoanDisburser
  def initialize(loan)
    @loan = loan
    initialize_validators
  end

  def disburse
    @loan.disburse! if valid?
  end

  def initialize_validators
    @validators = []
    @validators << LoanValidator.new(@loan)
    @validators << LoanAgreementValidator.new(@loan.loan_agreement)
  end

  def valid?
    @validators.map(&:valid?).all?
  end
end

class BankAccountDepositDisburser < LoanDisburser
  def initialize_validators
    super
    @validators << BankAccountDepositValidator.new(@loan.bank_account_deposit)
  end
end

class ACHDepositDisburser < LoanDisburser
  def initialize_validators
    super
    @validators << AchDepositValidator.new(@loan.ach_deposit)
  end
end

~~~

### Summary

As you have already seen template pattern is a useful design pattern to use when you have classes that go through a similar sequence of steps but vary in how the step are implemented.
