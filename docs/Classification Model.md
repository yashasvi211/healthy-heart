https://mlu-explain.github.io/
### What is a data classification model?

Classification models are used to assign items to a discrete group or class based on a specific set of features.

### Why is it so hard to get right?

Each model has its own strengths and weaknesses in a given scenario. There is no cut-and-dried flowchart that can be used to determine which model you should use without grossly oversimplifying the considerations. Choosing a data classification model is also closely tied to the business case and a solid understanding of what you are trying to accomplish.

### What can you do to choose the right model?

To begin with, make sure you can answer the following questions:

- How much data do you have and is it continuous?
- What type of data is it?
- What are you trying to accomplish?
- How important is it to visualize the process?
- How much detail do you need?
- Is storage a limiting factor?
 
When you’re confident you understand the type of data you’re going to be working with and what it will be used for, you can start looking at the strengths of various models. There are some generic rules of thumb to help you choose the best classification model, but these are just starting points. If you are working with a large amount of data (where a small variance in performance or accuracy can have a large effect), then choosing the right approach often requires trial and error to achieve the right balance of complexity, performance, and accuracy. The following sections describe some of the common models that are useful to know.

## Classification Cross-Validation

Cross-validation is a model assessment technique used to evaluate a machine learning algorithm’s performance when making predictions on new data sets it has not been trained on. This is done by partitioning a data set and using a subset to train the algorithm and the remaining data for testing.  

## Common Classification Models

#### Logistic Regression

![Generic graphic of a logistic regression.](https://nl.mathworks.com/campaigns/offers/next/choosing-the-best-machine-learning-classification-model-and-avoiding-overfitting/_jcr_content/mainParsys/band_1089239189_copy/mainParsys/columns_copy/3d8eb7e1-9735-42ce-9318-9787ba4ca760/accordion_297028633/accordion/e0d98c38-b7e1-4c99-8951-842edd2f8bca/parsys/columns/5c0aca7c-53b9-4d71-a6ca-1585a19a7674/image.adapt.full.medium.svg/1721315616910.svg)

Even though the word “regression” is in the name, logistic regression is used for binary classification problems (those where the data has only two classes). Logistic regression is known as a simpler classification technique and is often used as a starting point to establish a baseline before moving to more complex model types.

Logistic regression uses a linear combination of the predictor variables to estimate the probability of the outcome being 0 or 1. This is why the word “regression” is in the name. Because the probability is calculated as a linear combination of the predictor variables, logistic regression models are relatively straightforward to interpret.

#### Naive Bayes
![Generic graphic of a naive Bayes model.](https://nl.mathworks.com/campaigns/offers/next/choosing-the-best-machine-learning-classification-model-and-avoiding-overfitting/_jcr_content/mainParsys/band_1089239189_copy/mainParsys/columns_copy/3d8eb7e1-9735-42ce-9318-9787ba4ca760/accordion_297028633/accordion/3de69f0c-d3f8-4652-9c39-2a23d1e1a500/parsys/columns_copy/5c0aca7c-53b9-4d71-a6ca-1585a19a7674/image_copy.adapt.full.medium.svg/1721315616991.svg)

If the data is not complex and your task is relatively simple, try a naive Bayes algorithm. It’s a high-bias/low-variance classifier, which has advantages over logistic regression and nearest neighbor algorithms when working with a limited amount of data available to train a model.

Naive Bayes is also a good choice when CPU and memory resources are a limiting factor. Because naive Bayes is very simple, it doesn’t tend to overfit data and can be trained very quickly. It also does well with continuous new data used to update the classifier.

If the data grows in size and variance and you need a more complex model, other classifiers will probably work better. Also, its simple analysis is not a good basis for complex hypotheses.

Naive Bayes is often the first algorithm scientists try when working with text (think spam filters and sentiment analysis). It’s a good idea to try this algorithm before ruling it out.

#### k-Nearest Neighbor

![Generic graphic of a k nearest neighbor.](https://nl.mathworks.com/campaigns/offers/next/choosing-the-best-machine-learning-classification-model-and-avoiding-overfitting/_jcr_content/mainParsys/band_1089239189_copy/mainParsys/columns_copy/3d8eb7e1-9735-42ce-9318-9787ba4ca760/accordion_297028633/accordion/7c7ce2d1-f8e1-4550-8e48-52ae5f1dad56/parsys/columns_copy/5c0aca7c-53b9-4d71-a6ca-1585a19a7674/image_copy.adapt.full.medium.svg/1721315617072.svg)

Categorizing data points based on their distance to other points in a training data set can be a simple yet effective way of classifying data. _k_-nearest neighbor (KNN) is the “guilty by association” algorithm.

KNN is an instance-based lazy learner, which means there’s no real training phase. You load the training data into the model and let it sit until you actually want to start using the classifier. When you have a new query instance, the KNN model looks for the specified _k_ number of nearest neighbors; so if_k_ is 5, then you find the class of five nearest neighbors. If you are looking to apply a label or class, the model takes a vote to see where it should be classed. If you’re performing a regression problem and want to find a continuous number, take the mean of _f_ values of _k_ nearest neighbors.

Although the training time of KNN is short, actual query time (and storage space) might be longer than that of other models. This is especially true as the number of data points grows because you’re keeping all the training data, not just an algorithm.

The greatest drawback to this method is that it can be fooled by irrelevant attributes that obscure important attributes. Other models such as decision trees are better able to ignore these distractions. There are ways to correct for this issue, such as applying weights to your data, so you’ll need to use your judgment when deciding which model to use.

#### Decision Trees
![Generic graphic of a decision tree.](https://nl.mathworks.com/campaigns/offers/next/choosing-the-best-machine-learning-classification-model-and-avoiding-overfitting/_jcr_content/mainParsys/band_1089239189_copy/mainParsys/columns_copy/3d8eb7e1-9735-42ce-9318-9787ba4ca760/accordion_297028633/accordion/4ffbc7eb-dee7-43af-87c0-7a36a4aa3bd9/parsys/columns_copy/5c0aca7c-53b9-4d71-a6ca-1585a19a7674/image_copy.adapt.full.medium.svg/1721315617153.svg)

To see how a decision tree predicts a response, follow the decisions in the tree from the root (beginning) node down to a leaf node which contains the response. Classification trees give responses that are nominal, such as true or false. Regression trees give numeric responses.

Decision trees are relatively easy to follow; you can see a full representation of the path taken from root to leaf. This is especially useful if you need to share the results with people interested in how a conclusion was reached. They are also relatively quick.

The main disadvantage of decision trees is that they tend to overfit, but there are ensemble methods to counteract this. Toshi Takeuchi has written a good example (for a Kaggle competition) that uses a [bagged decision tree](https://blogs.mathworks.com/loren/2015/06/18/getting-started-with-kaggle-data-science-competitions/) to determine how likely someone would be to survive the Titanic disaster.

#### Support Vector Machine
![Generic graphic of a support vector machine.](https://nl.mathworks.com/campaigns/offers/next/choosing-the-best-machine-learning-classification-model-and-avoiding-overfitting/_jcr_content/mainParsys/band_1089239189_copy/mainParsys/columns_copy/3d8eb7e1-9735-42ce-9318-9787ba4ca760/accordion_297028633/accordion/5fe66723-d574-4204-b831-bf98434961af/parsys/columns_copy/5c0aca7c-53b9-4d71-a6ca-1585a19a7674/image_copy.adapt.full.medium.svg/1721315617234.svg)

You might use a support vector machine (SVM) when your data has exactly two classes. An SVM classifies data by finding the best hyperplane that separates all data points of one class from those of the other class (the best hyperplane for an SVM is the one with the largest margin between the two classes). You can use an SVM with more than two classes, in which case the model will create a set of binary classification subproblems (with one SVM learner for each subproblem).

There are a couple of strong advantages of using an SVM. First, it is extremely accurate and tends not to overfit data. Second, linear support vector machines are relatively easy to interpret. Because SVM models are very fast, once your model has been trained you can discard the training data if you have limited memory available. It also tends to handle complex, nonlinear classification very well by utilizing a technique called the “kernel trick.”

However, SVMs need to be trained and tuned up front, so you need to invest time in the model before you can begin to use it. Also, its speed is heavily impacted if you are using the model with more than two classes.

#### Neural Networks 

![Generic graphic of a neural network.](https://nl.mathworks.com/campaigns/offers/next/choosing-the-best-machine-learning-classification-model-and-avoiding-overfitting/_jcr_content/mainParsys/band_1089239189_copy/mainParsys/columns_copy/3d8eb7e1-9735-42ce-9318-9787ba4ca760/accordion_297028633/accordion/3fb84685-c1f7-47e4-855c-f67781547c01/parsys/columns_copy/5c0aca7c-53b9-4d71-a6ca-1585a19a7674/image_copy.adapt.full.medium.svg/1721315617315.svg)

An artificial neural network (ANN) can learn and therefore be trained to find solutions, recognize patterns, classify data, and forecast future events. People often use ANNs to solve more complex problems, such as character recognition, stock market prediction, and image compression.

The behavior of a neural network is defined by the way its individual computing elements are connected and by the strengths of those connections, or weights. The weights are automatically adjusted by training the network according to a specified learning rule until it performs the desired task correctly.

For experienced users, ANNs are great at modeling nonlinear data with a high number of input features. When used correctly, ANNs can solve problems that are too difficult to address with a straightforward algorithm. However, neural networks are computationally expensive, it is difficult to understand how an ANN has reached a solution (and therefore infer an algorithm), and fine-tuning an ANN is often not practical—all you can do is change the inputs of your training setup and retrain.


#### Random Forest

https://mlu-explain.github.io/random-forest/

